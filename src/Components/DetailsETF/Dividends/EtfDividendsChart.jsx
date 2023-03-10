import { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import { formatCash } from "../../../Utils";

const dividends = [
    { year: 2000, dividend: 4.5, yield: 1.43 },
    { year: 2001, dividend: 1.53, yield: 4.3 },
    { year: 2002, dividend: 1.75, yield: 4.3 },
    { year: 2003, dividend: 1.75, yield: 4.2 },
    { year: 2004, dividend: 1, yield: 5 },
    { year: 2005, dividend: 2, yield: 5.6 },
    { year: 2006, dividend: 2.26, yield: 3.4 },
    { year: 2007, dividend: 2.53, yield: 3.4 },
    { year: 2008, dividend: 2.66, yield: 3.3 },
    { year: 2009, dividend: 2.8, yield: 3.1 },
    { year: 2010, dividend: 3.1, yield: 3 },
    { year: 2011, dividend: 3, yield: 3.8 },
    { year: 2012, dividend: 3.2, yield: 4 },
    { year: 2013, dividend: 3.9, yield: 3.6 },
    { year: 2014, dividend: 4.2, yield: 3.2 },
    { year: 2015, dividend: 4.3, yield: 3 },
    { year: 2016, dividend: 0, yield: 2.09 },
    { year: 2017, dividend: 3, yield: 2.7 },
    { year: 2018, dividend: 4, yield: 2.4 },
    { year: 2019, dividend: 4.7, yield: 2.1 },
    { year: 2020, dividend: 5, yield: 2.9 },
    { year: 2021, dividend: 5.3, yield: 3.6 },
    { year: 2022, dividend: 5, yield: 4 },
];

function EtfDividendsChart() {
    const [dividendsChart, setDividendsChart] = useState([]);
    const [hoveredData, setHoveredData] = useState(null);
    const dates = dividends.map(dividend => dividend.year);
    const dividendValues = dividends.map(dividend => dividend.dividend);
    const yieldValues = dividends.map(dividend => dividend.yield);

    useEffect(() => {
        setDividendsChart({
            labels: dates,
            datasets: [
                {
                    label: "Dividende annuel",
                    data: dividendValues,
                    borderColor: "#FF7200",
                    borderWidth: 2,
                    fill: false,
                    pointRadius: 2,
                    tension: 0.3,
                    yAxisID: 'y',
                },
                {
                    label: "Rendement",
                    data: yieldValues,
                    backgroundColor: (context) => {
                        const ctx = context.chart.ctx;
                        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                        gradient.addColorStop(0, "rgba(208, 165, 116, 0.2)");
                        gradient.addColorStop(1, "rgba(208, 165, 116, 0.0)");
                        return gradient;
                    },
                    borderColor: "#d0a574",
                    borderWidth: 2,
                    fill: true,
                    pointRadius: 1,
                    tension: 0.3,
                    yAxisID: 'y1',
                },
            ]
        });
    }, [dividends]);

    const [shouldAnimate, setShouldAnimate] = useState(true);

    setTimeout(() => {
        setShouldAnimate(false);
    }, 1000);


    const handleHover = (event, chartElements) => {
        if (chartElements.length && !shouldAnimate) {
            const pointIndex = chartElements[0].index;
            const hoveredDataVar = dividends[pointIndex];
            setHoveredData(hoveredDataVar);
        } else {
            setHoveredData(null);
        }
    };

    const drawAverageDashedLine = {
        id: 'drawAverageDashedLine',
        afterDraw: (chart) => {
            const datas = chart.data.datasets[1].data;
            const average = datas.reduce((a, b) => a + b, 0) / datas.length;
            const { ctx, chartArea: { left, width }, scales: { y1 } } = chart;
            ctx.save();
            ctx.setLineDash([4, 5]);
            ctx.strokeStyle = "rgb(156 163 175)";
            ctx.strokeRect(left, y1.getPixelForValue(average), width, 0);
            ctx.restore();

            ctx.fillStyle = "rgb(156 163 175)";
            const label = `Rend. moyen ${average.toFixed(2)}%`
            const labelWidth = ctx.measureText(label).width;
            ctx.fillText(label, 0, y1.getPixelForValue(average) - 10);
        }
    }

    const caretHover = {
        id: 'dividendCaretHovers',
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
                ctx.strokeStyle = "lightgray";
                ctx.stroke();
                ctx.restore();
            } else {
                setHoveredData(null);
            }
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
            y: { display: false, },
            y1: { display: false },
            x: {
                grid: { display: false },
                ticks: {
                    maxTicksLimit: 7,
                    color: "rgb(156 163 175)"
                }
            }
        },
        plugins: {

            legend: {
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

    if (dividendsChart.labels) {
        return (
            <div className="w-full xxl:w-auto xxl:flex-2 flex flex-col items-start">
                <div className=" flex gap-2 w-full xxl:max-w-[778px]">
                    <div className="h-96 pt-4 w-full relative flex flex-col items-end xxl:mb-4">
                        <div className="flex gap-4 items-center z-[1] text-black dark:text-white pointer-events-none">
                            <h3 className="text-sm text-gray-400">{hoveredData ? hoveredData.year : dividendsChart.labels.at(-1)}</h3>
                            <h3 className="flex gap-2 items-center whitespace-nowrap">
                                <div className={`${miniBox} bg-[#FF7200]`} />
                                <span className="hidden sm:block">Dividende :</span>
                                <span className="block sm:hidden">Div. :</span>
                                {hoveredData ? formatCash(hoveredData.dividend) : formatCash(dividendValues.at(-1))}
                            </h3>
                            <h3 className="flex gap-2 items-center whitespace-nowrap">
                                <div className={`${miniBox} bg-[#d0a574]`} />
                                <span className="hidden sm:block">Rendement :</span>
                                <span className="block sm:hidden">Rend. :</span>
                                {hoveredData ? hoveredData.yield : yieldValues.at(-1)} %
                            </h3>
                        </div>
                        <Line data={dividendsChart} options={options} plugins={[drawAverageDashedLine, caretHover]} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (<div>...</div>)
    }
};

export default EtfDividendsChart;
