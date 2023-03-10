import React, { useContext, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ThemeContext } from "../../../Contexts/ThemeContext";

const backgrounds = ["#25A7C8", "#39BCC2", "#34BAA3", "#F8AF27", "#F8861D", "#E64C2C", "#EA3F4D"];

function PERBarChart() {
    const [chartData, setChartData] = useState([]);
    const { globalTheme } = useContext(ThemeContext);

    const labels = ["AAPL", "Secteur", "Industrie", "MSFT", "NVDA", "ASML", "ADBE"];
    const names = ["Apple", "Technologie", "Consumer Electronics", "Microsoft", "Nvidia", "ASML", "Adobe"];
    const data = [63.01, 27.39, 26.20, 101.66, 41.87, 33.05, 44.12];

    useEffect(() => {
        setChartData({
            labels,
            datasets: [
                {
                    label: "PER",
                    data,
                    // backgroundColor: backgrounds,
                    backgroundColor: backgrounds.map((bgColor) => {
                        const ctx = document.createElement('canvas').getContext('2d');
                        return createGradient(ctx, [bgColor, 'white']);
                    }),
                    borderRadius: 5,
                    borderWidth: 0
                }
            ]
        })
    }, []);

    function createGradient(ctx, colors) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 600);
        gradient.addColorStop(0, colors[0]);
        gradient.addColorStop(1, colors[1]);
        return gradient;
    }

    const horizontalPoint = {
        id: 'horizontalPoint',
        afterDatasetDraw: (chart) => {
            const meta = chart.getDatasetMeta(0);
            const pointCoords = meta.data[0];
            const { ctx, chartArea: { left, width }, scales: { y } } = chart;
            ctx.save();
            ctx.setLineDash([4, 5]);
            ctx.strokeStyle = "rgb(156 163 175)";
            ctx.strokeRect(left, pointCoords.y, width, 0);
            ctx.restore();
        }
    }

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            datalabels: {
                font: {
                    weight: 'bold',
                    size: 16
                },
                color: globalTheme === "dark" ? "#eee" : "#333",
                anchor: "end",
                align: "end",
                offset: -30,
                formatter: function (value, context) {
                    const label = context.chart.data.labels[context.dataIndex];
                    const data = context.chart.data.datasets[0].data[context.dataIndex];
                    return [`${data} x`, "", label];
                }
            },
            tooltip: {
                displayColors: false,
                padding: 20,
                bodyFont: {
                    size: 16,
                    weight: "bold"
                },
                callbacks: {
                    title: () => "",
                    label: function (tooltipItem) {
                        const index = tooltipItem.dataIndex;
                        return names[index];
                    }
                },
            },
        },
        scales: {
            y: {
                display: false,
                ticks: { color: "#eee" },
                grid: { color: "rgba(238,238,238,0.2)" }
            },
            x: {
                display: false,
                ticks: { color: "#eee" },
                grid: { display: false, },
            }
        },
    };

    if (!chartData.labels) return <div>...</div>
    return (
        <div className="w-full flex flex-col items-start">
            <h2 className="text-md">Comparaison PER</h2>
            <div className="w-full overflow-auto scrollbar-hidden">
                <div className="h-60 w-full min-w-[800px] border-b border-gray-400">
                    <Bar data={chartData} options={options} plugins={[ChartDataLabels, horizontalPoint]} />
                </div>
            </div>
        </div>
    );
}

export default PERBarChart;
