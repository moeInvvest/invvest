import React from "react";
import styles from "../../../Styles";
import CryptoChart from "./CryptoChart";
import CryptoStatistics from "./CryptoStatistics";

function CryptoKeyData({ crypto }) {
    return (
        <section className={`${styles.section} mt-0 relative z-[2]`}>
            <h2 className={`${styles.heading} text-2xl`}>Infos clés</h2>
            <div className="flex items-center flex-col xl:flex-row gap-4">
                <CryptoChart crypto={crypto} />
                <CryptoStatistics crypto={crypto} />
            </div>
        </section>
    );
}

export default CryptoKeyData;
