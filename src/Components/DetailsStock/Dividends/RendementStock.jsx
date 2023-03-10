import React, { useContext, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ThemeContext } from "../../../Contexts/ThemeContext";
import PayoutRatioDoughnut from "./PayoutRatioDoughnut";
import { createGradient } from "../../../Utils";

const backgrounds = ["#25A7C8", "#39BCC2", "#34BAA3", "#F8AF27", "#F8861D", "#E64C2C", "#EA3F4D"];

function RendementStock({ stock }) {
    const [chartData, setChartData] = useState([]);
    const { globalTheme } = useContext(ThemeContext);

    const labels = ["AAPL", "MSFT", "NVDA", "ASML", "ADBE"];
    const names = ["Apple", "Microsoft", "Nvidia", "ASML", "Adobe"];
    const data = [0.63, 1.1, 0.07, 1.6, 0.9];

    useEffect(() => {
        setChartData({
            labels,
            datasets: [
                {
                    label: "Rendement",
                    data,
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

    const horizontalPoint = {
        id: 'horizontalPoint',
        afterDatasetDraw: (chart) => {
            const meta = chart.getDatasetMeta(0);
            const pointCoords = meta.data[0];
            const { ctx, chartArea: { left, width } } = chart;
            ctx.save();
            ctx.setLineDash([4, 5]);
            ctx.strokeStyle = "rgb(156 163 175)";
            ctx.strokeRect(left, pointCoords.y, width, 0);
            ctx.restore();
        }
    }

    const options = {
        layout: {
            padding: {
                top: 40,
            },
        },
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
                    return [`${data} %`, "", label];
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
            <h2 className="text-md">Comparaison rendement</h2>
            <div className="w-full flex flex-col gap-8 lg:flex-row items-center lg:gap-4">
                <div className="w-full overflow-auto scrollbar-hidden lg:flex-2">
                    <div className="h-60 w-full min-w-[500px] border-b border-gray-400">
                        <Bar data={chartData} options={options} plugins={[ChartDataLabels, horizontalPoint]} />
                    </div>
                </div>
                <div className="flex-1">
                    <PayoutRatioDoughnut stock={stock} />
                </div>
            </div>
        </div>
    );

}

export default RendementStock;
