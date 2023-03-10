import React, { useEffect, useState } from "react";
import styles from "../../../Styles";
import { Doughnut } from 'react-chartjs-2';

function getConsensusColor(str) {
    if (str === "strongBuy") return "bg-[#098600]";
    if (str === "buy") return "bg-[#7DB33D]";
    if (str === "hold") return "bg-[#d0d801]";
    if (str === "sell") return "bg-[#d88f01]";
    if (str === "strongSell") return "bg-[#da2d2d]";
}

function Consensus({ stock }) {
    const [doghnutChart, setDoghnutChart] = useState([]);
    const [hoveredData, setHoveredData] = useState(null);
    const backgrounds = ["#098600", "#7DB33D", "#d0d801", "#d88f01", "#da2d2d"];

    const translateConsensus = (str) => {
        if (str === "strongBuy") return "Acheter";
        if (str === "buy") return "Renforcer";
        if (str === "hold") return "Conserver";
        if (str === "sell") return "Alléger";
        if (str === "strongSell") return "Vendre";
    }

    useEffect(() => {
        setDoghnutChart({
            labels: stock.consensusAnalytics.data.map(obj => translateConsensus(Object.keys(obj)[0])),
            datasets: [
                {
                    label: "Consensus Analytics",
                    data: stock.consensusAnalytics.data.map(obj => Object.values(obj)),
                    backgroundColor: backgrounds,
                    // borderWidth: 2,
                    cutout: "80%",
                    borderRadius: 5,
                    borderWidth: 0
                }
            ]
        });
    }, []);

    const hoverDoughnut = {
        id: 'hoverDoughnut',
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
                position: 'bottom',
                font: {
                    size: 14
                },
                padding: {
                    bottom: 0
                }
            },
        },
    };

    return (
        <section className={`${styles.section} flex-1`}>
            <h2 className={`${styles.heading} text-2xl mb-8`}>Consensus des analystes</h2>
            {doghnutChart.labels ?
                <div className="tableBrkpt:flex-1 flex flex-col gap-6 items-center justify-center w-full">
                    <p className={`py-2 px-4 rounded-full text-white ${getConsensusColor(stock.consensusAnalytics.consensus)}`}>
                        {translateConsensus(stock.consensusAnalytics.consensus)}
                    </p>
                    <div className="w-48 relative">
                        <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                            <h2 className="whitespace-nowrap max-w-[18ch] truncate">
                                {hoveredData ? hoveredData.label : translateConsensus(Object.keys(stock.consensusAnalytics.data[0])[0])}
                            </h2>
                            <h3 className="font-bold text-2xl">
                                {hoveredData ? hoveredData.data : Object.values(stock.consensusAnalytics.data[0])}
                            </h3>
                        </div>
                        <Doughnut data={doghnutChart} options={options} plugins={[hoverDoughnut]} />
                    </div>
                    <p className="text-sm">Basé sur : {stock.consensusAnalytics.data.reduce((acc, data) => acc + Number(Object.values(data)), 0)} analystes</p>
                </div>
                :
                ""
            }
        </section>
    );
}

export default Consensus;
