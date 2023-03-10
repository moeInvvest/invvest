import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

function SegmentSales({ stock }) {
    const [hoveredData, setHoveredData] = useState(null);
    const [doghnutChart, setDoghnutChart] = useState([]);
    const totalRevenue = stock.segmentsSales.reduce((acc, segment) => acc + segment.value, 0);

    const backgrounds = ["#25A7C8", "#39BCC2", "#34BAA3", "#31AE75", "#4DA343", "#A2B831", "#DCBE2B", "#F8AF27", "#F8861D", "#E64C2C", "#EA3F4D", "#666192"];

    useEffect(() => {
        stock.segmentsSales = stock.segmentsSales.sort((a, b) => b.value - a.value)
        setDoghnutChart({
            labels: stock.segmentsSales.map(segment => segment.label),
            datasets: [
                {
                    label: "Segments",
                    data: stock.segmentsSales.map(segment => segment.value),
                    backgroundColor: backgrounds,
                    cutout: "80%",
                    borderRadius: 5,
                    borderWidth: 0
                }
            ]
        });
    }, [stock]);

    const plug = {
        id: 'hoverFinancialRatioDoughnut',
        afterDraw: (chart, args, options) => {
            const datas = chart.data.datasets[0].data;
            const labels = chart.data.labels;
            if (chart._active.length > 0) {
                const pointIndex = chart._active[0].index;
                const hoveredLabel = labels[pointIndex];
                const hoveredDataVar = datas[pointIndex];
                setHoveredData({ label: hoveredLabel, data: hoveredDataVar });
            } else {
                setHoveredData(null);
            }
        }
    }

    const options = {
        spacing: 5,
        plugins: {
            tooltip: {
                enabled: false
            },
            legend: {
                display: false,
                position: 'right',
                padding: {
                    left: 20,
                }
            },
            title: {
                display: false,
            },
        },
    };

    if (!doghnutChart.labels) {
        return (<div>...</div>)
    } else {
        return (
            <div className="flex flex-col gap-4 flex-1">
                <h2 className="text-md">Par segment</h2>
                <div className="h-60 relative flex items-center justify-center">
                    <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                        <h2 className="whitespace-nowrap max-w-[18ch] truncate">
                            {hoveredData ? hoveredData.label : doghnutChart.labels[0]}
                        </h2>
                        <h3 className="font-bold text-2xl">
                            {hoveredData ? (hoveredData.data * 100 / totalRevenue).toFixed(2) : (doghnutChart.datasets[0].data[0] * 100 / totalRevenue).toFixed(2)} %
                        </h3>
                    </div>
                    <Doughnut data={doghnutChart} options={options} plugins={[plug]} />
                </div>
            </div>
        );
    }
}

export default SegmentSales;
