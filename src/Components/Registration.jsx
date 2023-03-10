import React from "react";
import styles from "../Styles";

function Registration({ heading }) {
    return (
        <div className={`${styles.boxWidth} px-4 py-16`}>
            <div className="content">
                <div className="flex flex-col items-start gap-4">
                    <h1>{heading}</h1>
                </div>
            </div>
        </div>
    );
};

export default Registration;
