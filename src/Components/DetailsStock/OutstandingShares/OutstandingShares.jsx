import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import styles from "../../../Styles";
import { formatFrenchNumber } from "../../../Utils";

function OutstandingShares({ stock }) {
    const [chartData, setChartData] = useState([]);
    const [hoveredData, setHoveredData] = useState(null);
    const labels = stock.outstandingShares.map(data => data.calendarYear);
    const data = stock.outstandingShares.map(data => data.weightedAverageShsOut);

    useEffect(() => {
        setChartData({
            labels,
            datasets: [
                {
                    label: "Outstanding Shares",
                    data,
                    borderColor: "rgba(248, 175, 39, 1)",
                    borderWidth: 2,
                    fill: true,
                    backgroundColor: (context) => {
                        const ctx = context.chart.ctx;
                        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                        gradient.addColorStop(0, "rgba(248, 175, 39, 0.2)");
                        gradient.addColorStop(1, "rgba(248, 175, 39, 0)");
                        return gradient;
                    },
                    pointRadius: 0,
                    tension: 0.3,
                },
            ]
        });
    }, []);

    const caretHover = {
        id: 'caretHover',
        afterDraw: function (chart, easing) {
            if (chart.tooltip?._active && chart.tooltip._active.length) {
                const activePoint = chart.tooltip._active[0];
                setHoveredData(activePoint.index);
                const ctx = chart.ctx;
                const x = activePoint.element.x;
                const topY = chart.scales.y.top;
                const bottomY = chart.scales.y.bottom;
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(x, topY);
                ctx.lineTo(x, bottomY);
                ctx.lineWidth = 1;
                ctx.strokeStyle = "rgba(248, 175, 39, 1)";
                ctx.stroke();
                ctx.restore();
            } else {
                setHoveredData(null);
            }
        }
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        animation: true,
        scales: {
            y: { display: false, beginAtZero: true },
            x: {
                display: true,
                grid: { display: false },
                ticks: {
                    color: "rgb(156 163 175)",
                    // callback: (value, index, ticks) => {
                    //     return new Date(labels[index]).getFullYear()
                    // }
                }
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "transparent",
                callbacks: {
                    title: () => "",
                    label: () => "",
                }
            }
        }
    };

    if (!chartData.labels) return <div>...</div>
    return (
        <section className={`${styles.section} flex-1`}>
            <h2 className={`${styles.heading} text-2xl pb-8`}>Actions en circulation</h2>
            <div className="flex flex-col items-end gap-4">
                <div className="flex items-center gap-2">
                    <h3 className="text-sm text-gray-400">{hoveredData !== null ? labels[hoveredData] : labels.at(-1)}</h3>
                    <h3>{hoveredData !== null ? formatFrenchNumber(data[hoveredData]) : formatFrenchNumber(data.at(-1))} actions</h3>
                </div>
                <div className="h-60 w-full">
                    <Line data={chartData} options={options} plugins={[caretHover]} className="max-w-full" />
                </div>
            </div>
        </section>
    );
}

export default OutstandingShares;
