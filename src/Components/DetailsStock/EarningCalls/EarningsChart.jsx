import React, { useEffect, useState } from "react";
import { Line, Scatter } from "react-chartjs-2";
import styles from "../../../Styles";
import { formatCash, formatFrenchDate, percentageBubble } from "../../../Utils";

function EarningsChart({ stock }) {
    const [chartData, setChartData] = useState([]);
    const [hoveredData, setHoveredData] = useState(null);
    const labels = stock.earningPerCalls.map(data => data.fiscalDateEnding);
    const epsData = stock.earningPerCalls.map((data, i) => ({ x: i, y: data.eps }));
    const epsEstimatedData = stock.earningPerCalls.map((data, i) => ({ x: i, y: data.epsEstimated }));
    const dates = stock.earningPerCalls.map(data => data.fiscalDateEnding);
    const differences = stock.earningPerCalls.map(data => data.difference);

    useEffect(() => {
        setChartData({
            labels,
            datasets: [
                {
                    label: "eps",
                    data: epsData,
                    borderColor: "transparent",
                    borderWidth: 2,
                    pointRadius: 15,
                    pointHoverRadius: 15,
                    backgroundColor: stock.earningPerCalls.map(data => data.difference >= 0 ? "#098600" : "#da2d2d"),
                    fill: false,
                },
                {
                    label: "epsEstimated",
                    data: epsEstimatedData,
                    borderColor: "#085BFC",
                    borderWidth: 2,
                    hoverBorderWidth: 2,
                    hoverBorderColor: "#085BFC",
                    pointRadius: 15,
                    pointHoverRadius: 15,
                    backgroundColor: "transparent",
                    fill: false,
                }
            ]
        })
    }, [stock]);

    const hoverScatter = {
        id: 'hoverScatter',
        afterDraw: (chart, args, options) => {
            if (chart._active.length > 0) {
                const pointIndex = chart._active[0].index;
                setHoveredData(pointIndex);
            } else {
                setHoveredData(null);
            }
        }
    };

    const caretHover = {
        id: 'caretHover',
        afterDraw: function (chart, easing) {
            if (chart.tooltip?._active && chart.tooltip._active.length) {
                const activePoint = chart.tooltip._active[0];
                const isPositive = differences[activePoint.index] >= 0;
                const ctx = chart.ctx;
                const x = activePoint.element.x;
                const topY = chart.scales.y.top;
                const bottomY = chart.scales.y.bottom;
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(x, topY);
                ctx.lineTo(x, bottomY);
                ctx.lineWidth = 1;
                ctx.strokeStyle = isPositive ? '#06c42f' : "red";
                ctx.stroke();
                ctx.restore();
            }
        }
    }

    const options = {
        interaction: {
            mode: 'index',
            intersect: false,
        },
        animation: true,
        maintainAspectRatio: false,
        scales: {
            y: { display: false, beginAtZero: true },
            x: {
                grid: { color: "rgb(156, 163, 175, 0.2)" },
                ticks: {
                    color: "rgb(156 163 175)",
                    callback: function (value, index, ticks) {
                        return formatFrenchDate(new Date(dates[index]), true);
                    }
                },
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: "transparent",
                callbacks: {
                    title: () => "",
                    label: () => "",
                }
            }
        }
    };

    const miniBox = "w-3 h-3 rounded-sm"

    if (!chartData.labels) return <div>...</div>
    return (
        <section className={`mt-8 mx-0 sm:mx-4 py-6 bg-white dark:bg-bg-dark-secondary rounded-2xl xl:rounded-3xl shadow-headerBox dark:shadow-darkHeaderBox flex-[3]`}>
            <h2 className={`${styles.heading} text-2xl mb-8 px-4 sm:px-8`}>Annonces du bénéfice / action</h2>
            <div className="h-80 relative flex flex-col items-end mx-auto pb-8" style={{ width: "calc(100% - 2rem)" }}>
                <div className="flex items-center justify-end gap-2">
                    <h3 className="text-sm text-gray-400">{hoveredData !== null ? formatFrenchDate(new Date([dates[hoveredData]]), true) : formatFrenchDate(new Date([dates.at(-1)]), true)}</h3>
                    <h3 className={`${miniBox} bg-[${differences[hoveredData] >= 0 ? "#098600" : "#da2d2d"}]`}></h3>
                    <p>Annoncé :</p>
                    <h3>{hoveredData !== null ? formatCash(epsData[hoveredData].y, undefined, "$") : formatCash(epsData.at(-1).y, undefined, "$")}</h3>
                    <h3 className={`${miniBox} bg-[#085BFC]`}></h3>
                    <p className="hidden sm:block">Estimé :</p>
                    <p className="block sm:hidden">Est. :</p>
                    <h3>{hoveredData !== null ? formatCash(epsEstimatedData[hoveredData].y, undefined, "$") : formatCash(epsEstimatedData.at(-1).y, undefined, "$")}</h3>
                    <div className="hidden sm:block">{hoveredData !== null ? percentageBubble(Number(differences[hoveredData])) : percentageBubble(Number(differences.at(-1)))}</div>
                </div>
                <Scatter data={chartData} options={options} plugins={[hoverScatter, caretHover]} />
            </div>
        </section>
    );
}

export default EarningsChart;
