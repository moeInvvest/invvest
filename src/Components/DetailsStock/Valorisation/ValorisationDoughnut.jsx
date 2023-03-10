import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { formatCashShorthand } from "../../../Utils";

function ValorisationDoughnut({ stock }) {
    const [hoveredData, setHoveredData] = useState(null);
    const financialRatioOptions = ["PER", "PS", "PB"];
    const [doghnutChart, setDoghnutChart] = useState([]);
    const [activeFinancialRatioOptions, setActiveFinancialRatioOptions] = useState(financialRatioOptions[0]);
    const [activeFinancialRatio, setActiveFinancialRatio] = useState([{ label: "Bénéfice net", value: stock.netIncome }, { label: "Capitalisation", value: stock.marketcap }]);

    useEffect(() => {
        setDoghnutChart({
            labels: activeFinancialRatio.map(data => data.label),
            datasets: [
                {
                    label: activeFinancialRatioOptions,
                    data: [(activeFinancialRatio[0].value * 100 / activeFinancialRatio[1].value), 100 - (activeFinancialRatio[0].value * 100 / activeFinancialRatio[1].value)],
                    backgroundColor: ["#4DA343", "#25A7C8"],
                    cutout: "80%",
                    borderRadius: 5,
                    borderWidth: 0
                }
            ]
        });
    }, [activeFinancialRatioOptions, stock]);

    function toggleActiveFinancialRatio(option) {
        if (option === "PER") {
            setActiveFinancialRatioOptions("PER")
            setActiveFinancialRatio([{ label: "Bénéfice net", value: stock.netIncome }, { label: "Capitalisation", value: stock.marketcap }]);
        } else if (option === "PS") {
            setActiveFinancialRatioOptions("PS")
            setActiveFinancialRatio([{ label: "Chiffre d'affaires", value: stock.revenue }, { label: "Capitalisation", value: stock.marketcap }]);
        } else if (option === "PB") {
            setActiveFinancialRatioOptions("PB")
            setActiveFinancialRatio([{ label: "Book", value: (stock.marketcap / stock.PB) }, { label: "Capitalisation", value: stock.marketcap }]);
        }
    };

    const plug = {
        id: 'hoverFinancialRatioDoughnut',
        afterDraw: (chart, args, options) => {
            const labels = chart.data.labels;
            const datas = chart.data.datasets[0].data;
            if (chart._active.length > 0) {
                const pointIndex = chart._active[0].index;
                const hoveredLabel = labels[pointIndex];
                let hoveredDataVar;
                if (hoveredLabel === "Bénéfice net") {
                    hoveredDataVar = stock.netIncome;
                } else if (hoveredLabel === "Chiffre d'affaires") {
                    hoveredDataVar = stock.revenue
                } else {
                    hoveredDataVar = stock.marketcap / stock.PB
                }
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
            <div className="flex-1 pt-8 lg:pt-[4.5rem]">
                <div className="w-full flex flex-col items-center justify-center gap-8">
                    <div className="flex items-center justify-center gap-4 border-b border-gray-200 dark:border-opacity-20 w-full pb-4">
                        {financialRatioOptions.map(option => (
                            <button key={option} onClick={() => toggleActiveFinancialRatio(option)}
                                className={`py-2 px-4 rounded-xl transition-all ${activeFinancialRatioOptions === option ? "bg-primary-clr text-white shadow-sm" : ""}`}>
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className="h-72 relative">
                        <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                            <h2 className="whitespace-nowrap max-w-[18ch] truncate">
                                {hoveredData ? hoveredData.label : activeFinancialRatioOptions === "PS" ? "Price / Sales" : activeFinancialRatioOptions === "PB" ? "Price / Book" : activeFinancialRatioOptions}
                            </h2>
                            <h3 className="font-bold text-2xl whitespace-nowrap">
                                {hoveredData ? formatCashShorthand(hoveredData.data) : `${stock[activeFinancialRatioOptions]} x`}
                            </h3>
                        </div>
                        <Doughnut data={doghnutChart} options={options} plugins={[plug]} />
                    </div>
                </div>
            </div>
        )
    };
}

export default ValorisationDoughnut;
