import React from "react";
import styles from "../../../Styles";
import PERBarChart from "./PERBarChart";
import ValorisationDoughnut from "./ValorisationDoughnut";
import ValorisationGraph from "./ValorisationGraph";

function Valorisation({ stock }) {
    return (
        <section className={`${styles.section} relative z-[2]`}>
            <h2 className={`${styles.heading} text-2xl`}>Valorisation</h2>
            <div className="w-full flex flex-col gap-8">
                <div className="w-full flex flex-col gap-4 lg:flex-row">
                    <ValorisationGraph stock={stock} />
                    <ValorisationDoughnut stock={stock} />
                </div>
                <PERBarChart stock={stock} />
            </div>
        </section>
    );
};

export default Valorisation;
