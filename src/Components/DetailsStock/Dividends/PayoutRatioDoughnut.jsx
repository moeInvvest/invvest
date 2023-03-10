import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { formatCash } from "../../../Utils";

function PayoutRatioDoughnut({ stock }) {
    const [hoveredData, setHoveredData] = useState(null);
    const [doghnutChart, setDoghnutChart] = useState([]);
    const actualData = [Number((stock.dividendPerShareTTM).toFixed(2)), Number(stock.netIncomePerShareTTM.toFixed(2))];

    useEffect(() => {
        let fakePayoutRatio = stock.payoutRatioTTM;
        if (stock.payoutRatioTTM > 1) {
            fakePayoutRatio = 1
        } else {
            fakePayoutRatio = stock.payoutRatioTTM
        };

        setDoghnutChart({
            labels: ["Dividend annuel", "Bénéfice / action"],
            datasets: [
                {
                    label: "",
                    data: [fakePayoutRatio, 1 - fakePayoutRatio],
                    backgroundColor: ["#F8861D", "#4DA343"],
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
                const hoveredDataVar = actualData[pointIndex];
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
            <div className="h-64 relative flex items-center justify-center">
                <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                    <h2 className="whitespace-nowrap">
                        {hoveredData ? hoveredData.label : "Ratio de distribution"}
                    </h2>
                    <h3 className="font-bold text-2xl whitespace-nowrap">
                        {hoveredData ? formatCash(hoveredData.data, undefined, "$") : `${(stock.payoutRatioTTM * 100).toFixed(2)} %`}
                    </h3>
                </div>
                <Doughnut data={doghnutChart} options={options} plugins={[plug]} />
            </div>
        )
    }
}

export default PayoutRatioDoughnut;
