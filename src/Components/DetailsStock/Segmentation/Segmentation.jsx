import React from "react";
import styles from "../../../Styles";
import GeographicSales from "./GeographicSales";
import SegmentSales from "./SegmentSales";

function Segmentation({ stock }) {
    return (
        <section className={`${styles.section}`}>
            <h2 className={`${styles.heading} text-2xl`}>Segmentation des ventes <span className="text-sm text-gray-400">(2022)</span></h2>
            <div className="flex flex-col lg:flex-row pt-8 gap-4">
                <SegmentSales stock={stock} />
                <GeographicSales stock={stock} />
            </div>
        </section>
    );
}

export default Segmentation;
