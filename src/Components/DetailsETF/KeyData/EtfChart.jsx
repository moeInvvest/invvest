import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import { formatCash, formatFrenchDate, getNumber, getNumberSign } from "../../../Utils";
import etf from "../etf.json";

function EtfChart({ setCurrentPrice, chartData, setChartData }) {
    const [hoveredData, setHoveredData] = useState(null);
    const [array, setArray] = useState([]);
    const [priceVariation, setPriceVariation] = useState(null);
    const [firstDataPointPrice, setFirstDataPointPrice] = useState(0);

    useEffect(() => {
        const chartDataRes = etf.array1A.reverse();
        setCurrentPrice(etf.currentPrice);
        setArray(chartDataRes);
        setFirstDataPointPrice(chartDataRes[0].close);
        const lastPrice = chartDataRes[chartDataRes.length - 1].close;
        const firstPrice = chartDataRes[0].close;
        const priceVariationVar = (Number(lastPrice - firstPrice).toFixed(2) / firstPrice) * 100;
        setPriceVariation(priceVariationVar.toFixed(2));
        setChartData({
            labels: chartDataRes.map(day => day.date),
            datasets: [
                {
                    data: chartDataRes.map(day => day.close),
                    backgroundColor: (context) => {
                        const ctx = context.chart.ctx;
                        const gradient = ctx.createLinearGradient(0, 0, 0, 150);
                        gradient.addColorStop(0, chartDataRes[0].close < etf.currentPrice ? "rgba(6, 196, 47, 0.3)" : "rgba(255, 0, 0, 0.3)");
                        gradient.addColorStop(1, chartDataRes[0].close < etf.currentPrice ? "rgba(6, 196, 47, 0.01)" : "rgba(255, 0, 0, 0.01)");
                        return gradient;
                    },
                    borderColor: chartDataRes[0].close < etf.currentPrice ? "#06c42f" : "red",
                    borderWidth: 2,
                    fill: true,
                    pointRadius: 0,
                    tension: 0.3,
                }
            ]
        });
    }, []);

    const [shouldAnimate, setShouldAnimate] = useState(true);

    setTimeout(() => {
        setShouldAnimate(false);
    }, 1000);

    const delayBetweenPoints = 5;
    const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
    const animation = {
        x: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: NaN, // the point is initially skipped
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.xStarted) {
                    return 0;
                }
                ctx.xStarted = true;
                return ctx.index * delayBetweenPoints;
            },
        },
        y: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: previousY,
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.yStarted) {
                    return 0;
                }
                ctx.yStarted = true;
                return ctx.index * delayBetweenPoints;
            },
        }
    };

    const handleHover = (event, chartElements) => {
        if (chartElements.length && !shouldAnimate) {
            const pointIndex = chartElements[0].index;
            const hoveredData = array[pointIndex];
            const hoveredPrice = hoveredData.close;
            const priceVariationVar = (+(hoveredPrice - firstDataPointPrice).toFixed(2) / firstDataPointPrice) * 100;
            setHoveredData(array[pointIndex]);
            setPriceVariation(Number(priceVariationVar.toFixed(2)));
        }
    };

    const caretHover = {
        id: 'caretHover',
        afterDraw: function (chart, easing) {
            const datas = chart.data.datasets[0].data;
            const lastPrice = datas[datas.length - 1];
            const firstPrice = datas[0];
            const isPositive = firstPrice - lastPrice < 0;
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
                ctx.strokeStyle = isPositive ? '#06c42f' : "red";
                ctx.stroke();
                ctx.restore();
            } else {
                setHoveredData(null);
                const priceVariationVar = (Number(lastPrice - firstPrice).toFixed(2) / firstPrice) * 100;
                setPriceVariation(Number(priceVariationVar.toFixed(2)));
            }
        }
    }

    const options = {
        onHover: handleHover,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        animation: shouldAnimate ? animation : false,
        maintainAspectRatio: false,
        scales: {
            x: { display: false, },
            y: {
                display: false,
                // min: 120,
                // ticks: {
                //     callback: function (value, index, values) {
                //         // values.map(val => {
                //         //     if (val.value === 165) {
                //         //         return
                //         //     } else {
                //         //         values.push({ value: 165, label: 165 })
                //         //     }
                //         // })
                //         return Number(value);// pass tick values as numbers
                //     }
                // },
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

    const sortByOptions = ["1M", "1A", "YTD", "10A", "MAX"];
    const [sortBy, setSortBy] = useState(sortByOptions[0]);

    if (!chartData.labels && array.length < 1) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="flex-1 flex flex-col items-start w-full xl:w-auto">
                <div className="relative h-72 pt-16 w-full xl:max-w-[584px]">
                    <Line data={chartData} options={options} plugins={[caretHover]} />
                    <div className="absolute top-0 left-full -translate-x-full flex items-center gap-4 origin-left">
                        <p className="whitespace-nowrap text-gray-400 text-sm">
                            {hoveredData ? formatFrenchDate(new Date(hoveredData?.date)) : "Retour"}
                        </p>
                        <p className="font-bold">
                            {hoveredData ? formatCash(hoveredData.close) : sortBy}
                        </p>
                        {
                            priceVariation ?
                                <p className={`whitespace-nowrap font-bold py-1 px-2 rounded-lg flex gap-1 ${priceVariation > 0 ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}>
                                    <span>{getNumberSign(priceVariation)}</span>
                                    <span>{getNumber(priceVariation)}</span>%
                                </p> :
                                null
                        }
                    </div>
                </div>
                <div className="flex items-center gap-2 my-4">
                    {sortByOptions.map(option => (
                        <button key={option} onClick={() => setSortBy(option)}
                            className={`w-14 py-1 rounded-xl transition-all ${sortBy === option ? "bg-primary-clr text-white shadow-sm" : ""}`}>
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default EtfChart;
