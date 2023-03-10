import React from "react";
import styles from "../../../Styles";
import StockChart from "./StockChart";
import StockStatistics from "./StockStatistics";

function StockKeyData({ stock }) {
    return (
        <section className={`${styles.section} relative -mt-2 z-[2]`}>
            <h2 className={`${styles.heading} text-2xl`}>Infos clés</h2>
            <div className="flex items-center flex-col xl:flex-row gap-4">
                <StockChart stock={stock} />
                <StockStatistics stock={stock} />
            </div>
        </section>
    );
}

export default StockKeyData;
