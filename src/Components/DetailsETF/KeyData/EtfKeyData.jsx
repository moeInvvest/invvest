import React from "react";
import styles from "../../../Styles";
import EtfChart from "./EtfChart";
import EtfStatistics from "./EtfStatistics";

function EtfKeyData({ etf, chartData, setChartData, currentPrice, setCurrentPrice }) {
    return (
        <section id="keyData">
            <h2 className={`${styles.heading} text-2xl`}>Infos clés</h2>
            <div className="flex items-center flex-col xl:flex-row gap-4">
                <EtfChart chartData={chartData} setChartData={setChartData} currentPrice={currentPrice} setCurrentPrice={setCurrentPrice} />
                <EtfStatistics etf={etf} />
            </div>
        </section>
    );
}

export default EtfKeyData;
