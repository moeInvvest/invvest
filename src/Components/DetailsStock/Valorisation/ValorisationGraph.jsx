import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import { formatCash } from "../../../Utils";

function getValorisationBetaBubble(valorisationBeta) {
    return (
        <span className={`py-1 px-2 rounded-lg font-bold ${valorisationBeta < 0 ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}>
            {Math.abs(valorisationBeta.toFixed(2))} %
        </span>
    )
}

function ValorisationGraph({ stock }) {
    const [chartData, setChartData] = useState([]);
    const [hoveredData, setHoveredData] = useState(null);
    const [valorisationBeta, setValorisationBeta] = useState(0);
    const [valorisationBetaHover, setValorisationBetaHover] = useState(0);
    const [array, setArray] = useState([]);

    const realValues = stock.valorisationGraph.values.map(data => data.value);
    const fairValues = stock.valorisationGraph.fairValues.map(data => data.fairValue);
    const labels = stock.valorisationGraph.fairValues.map(data => new Date(data.year));

    const below25PercentBefore = fairValues.map(data => (data - (25 * data / 100)));
    const below25Percent = below25PercentBefore.map(data => data === 0 ? null : data);
    const below50PercentBefore = fairValues.map(data => (data - (50 * data / 100)));
    const below50Percent = below50PercentBefore.map(data => data === 0 ? null : data);
    const above25PercentBefore = fairValues.map(data => (data + (25 * data / 100)));
    const above25Percent = above25PercentBefore.map(data => data === 0 ? null : data);
    const above50PercentBefore = fairValues.map(data => (data + (50 * data / 100)));
    const above50Percent = above50PercentBefore.map(data => data === 0 ? null : data);

    useEffect(() => {
        const mergedArray = [];
        for (let i = 0; i < stock.valorisationGraph.values.length; i++) {
            const fairValue = stock.valorisationGraph.fairValues[i];
            const value = stock.valorisationGraph.values.find(element2 => element2.year === fairValue.year);
            const mergedElement = {
                year: fairValue.year,
                value: value.value,
                fairValue: fairValue.fairValue
            };
            mergedArray.push(mergedElement);
        }
        setArray(mergedArray);
        const pointToStudyValue = Number(stock.valorisationGraph.values[7].value);
        const pointToStudyFairValue = Number(stock.valorisationGraph.fairValues.find(data => new Date(data.year).getFullYear() === new Date().getFullYear()).fairValue);
        const valorisationBetaVar = (((pointToStudyValue - pointToStudyFairValue) / pointToStudyFairValue) * 100);
        setValorisationBeta(valorisationBetaVar);

        const down = (ctx, value) => ctx.p0DataIndex === 7 ? value : undefined;

        setChartData({
            labels: labels,
            datasets: [
                {
                    label: "D0",
                    data: above50Percent,
                    borderWidth: 0,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    tension: 0.3,
                    fill: "end",
                    spanGaps: true,
                    backgroundColor: "rgba(248, 85, 109, 0.6)"
                },
                {
                    label: "D1",
                    data: above25Percent,
                    borderWidth: 0,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    tension: 0.3,
                    fill: "-1",
                    spanGaps: true,
                    backgroundColor: "rgba(250, 108, 97, 0.4)"
                },
                {
                    label: "value",
                    data: realValues,
                    borderWidth: 3,
                    pointRadius: 2,
                    tension: 0.3,
                    borderColor: "#085BFC",
                    fill: false
                },
                {
                    label: "D3",
                    data: fairValues,
                    borderWidth: 4,
                    pointRadius: 2,
                    tension: 0.3,
                    borderColor: "#000",
                    fill: "5",
                    segment: {
                        borderColor: ctx => down(ctx, '#000') || '#000',
                        borderDash: ctx => down(ctx, [6, 6]),
                    },
                    spanGaps: true,
                    backgroundColor: "rgba(93, 228, 170, 0.8)",
                },
                {
                    label: "fair value",
                    data: fairValues,
                    borderWidth: 4,
                    pointRadius: 1,
                    tension: 0.3,
                    borderColor: "#fff",
                    fill: "-3",
                    spanGaps: true,
                    backgroundColor: "rgba(252, 176, 51, 0.4)",
                },
                {
                    label: "D5",
                    data: below25Percent,
                    borderWidth: 0,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    tension: 0.3,
                    fill: "+1",
                    spanGaps: true,
                    backgroundColor: "rgba(16, 187, 183, 0.8)",
                },
                {
                    label: "D6",
                    data: below50Percent,
                    borderWidth: 0,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    tension: 0.3,
                    fill: "origin",
                    spanGaps: true,
                    backgroundColor: "rgba(28, 152, 214, 0.8)",
                },
            ]
        });
    }, []);

    const handleHover = (event, chartElements) => {
        if (chartElements.length) {
            const pointIndex = chartElements[0].index;
            let hoveredDataVar = {};
            if (array[pointIndex].fairValue) {
                hoveredDataVar = array[pointIndex];
            } else {
                hoveredDataVar = array[pointIndex];
                hoveredDataVar.fairValue = array[pointIndex - 1].fairValue
            }
            if (!array[pointIndex].value) {
                hoveredDataVar = array[pointIndex];
                hoveredDataVar.value = array[pointIndex - 1].value
            }
            setHoveredData(hoveredDataVar);
            setValorisationBetaHover(((hoveredDataVar.value - hoveredDataVar.fairValue) / hoveredDataVar.fairValue) * 100)
        } else {
            setHoveredData(null);
        }
    };

    const valorisationCaretHover = {
        id: 'valorisationCaretHover',
        afterDraw: function (chart, easing) {
            if (chart.tooltip?._active && chart.tooltip._active.length) {
                const activePoint = chart.tooltip._active[0];
                const ctx = chart.ctx;
                const x = activePoint.element.x;
                const topY = chart.scales.y.top;
                const bottomY = chart.scales.y.bottom;
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(x, topY);
                ctx.lineTo(x, bottomY);
                ctx.lineWidth = 1;
                ctx.strokeStyle = "#fff";
                ctx.stroke();
                ctx.restore();
            } else {
                setHoveredData(null);
            }
        }
    }

    const whiteBg = {
        id: "whiteBg",
        beforeDraw: function (chart, easing) {
            const ctx = chart.ctx;
            const chartArea = chart.chartArea
            ctx.save();
            ctx.fillStyle = 'white';
            ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
            ctx.restore();
        }
    }

    const options = {
        responsive: true,
        onHover: handleHover,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        animation: true,
        maintainAspectRatio: false,
        scales: {
            y: { display: false, min: 0, max: 250 },
            x: {
                suggestedMin: "2017-01-01",
                grid: { display: false },
                ticks: {
                    color: "rgb(156 163 175)",
                },
                type: "time",
                time: {
                    unit: "year"
                },
            }
        },
        plugins: {
            filler: {
                propagate: true
            },
            legend: {
                display: false,
                position: "bottom",
                backgroundColor: "#fff",
                labels: {
                    usePointStyle: true,
                    padding: 15,
                    boxWidth: 10,
                    color: "rgb(156 163 175)",
                }
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

    if (!chartData.labels) return (<div>...</div>)
    return (
        <div className="flex-[3]">
            <div className="flex flex-col items-start gap-4">
                <div className="w-full flex items-center justify-center flex-col sm:flex-row sm:justify-start gap-1 pt-8 flex-wrap">
                    <p className="flex gap-2 items-center"><span className="font-bold">{stock.symbol}</span>
                        semble être actuellement</p>
                    <p className="flex items-center gap-2">
                        <span className="font-bold">{valorisationBeta > 0 ? "surévaluée" : "sousévaluée"}</span>
                        de
                        {getValorisationBetaBubble(valorisationBeta)}
                    </p>
                </div>
                <div className="flex sm:gap-4 flex-col sm:flex-row items-end justify-end z-[1] text-black dark:text-white pointer-events-none w-full pr-4 lg:pr-8">
                    <h3 className="text-sm text-gray-400">{hoveredData ? new Date(hoveredData.year).getFullYear() : new Date(array[6].year).getFullYear()}</h3>
                    <h3 className="flex gap-2 items-center whitespace-nowrap">
                        <div className={`${miniBox} bg-[#085BFC] outline outline-1`} />
                        <span className="">Prix :</span>
                        {hoveredData ? formatCash(hoveredData.value, undefined, "$") : formatCash(array[7].value, undefined, "$")}
                    </h3>
                    <h3 className="flex gap-2 items-center whitespace-nowrap">
                        <div className={`${miniBox} bg-[#000] outline outline-1`} />
                        <span className="">Juste prix :</span>
                        {hoveredData ? formatCash(hoveredData.fairValue, undefined, "$") : formatCash(array[6].fairValue, undefined, "$")}
                    </h3>
                    <div className="hidden sm:block">
                        {getValorisationBetaBubble(hoveredData ? valorisationBetaHover : valorisationBeta)}
                    </div>
                </div>
                <div className="h-96 w-full relative flex flex-col items-end xxl:mb-4 lg:-ml-4">
                    <Line data={chartData} options={options} plugins={[valorisationCaretHover, whiteBg]} />
                </div>
            </div>
        </div >
    );
};

export default ValorisationGraph;
