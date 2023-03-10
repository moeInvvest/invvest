import React from "react";
import styles from "../../../Styles";
import { formatCash, formatFrenchDate } from "../../../Utils";
import EtfDividendsChart from "./EtfDividendsChart";

function EtfDividends({ etf }) {
    return (
        <section className={`${styles.section}`}>
            <h2 className={`${styles.heading} text-2xl`}>Dividende</h2>
            <div className="flex items-center flex-col xxl:flex-row gap-12 xxl:gap-4">
                <EtfDividendsChart />
                <div className="w-full xxl:w-auto flex-1 flex-flex-col items-center text-gray-500 dark:text-gray-300">
                    <section className="grid grid-cols-2 w-full border-b border-gray-200 dark:border-opacity-20">
                        <div className="flex p-4 flex-col items-center border-r border-gray-200 dark:border-opacity-20">
                            <h3 className="whitespace-nowrap text-sm text-gray-400">Div. sans interruption</h3>
                            <h4 className="font-bold text-md sm:text-xl">{etf.dividendWithoutInterruption} ans</h4>
                        </div>
                        <div className="flex p-4 flex-col items-center">
                            <h3 className="whitespace-nowrap text-sm text-gray-400">Fréquence</h3>
                            <h4 className="font-bold text-md sm:text-xl">{etf.frequency} fois par an</h4>
                        </div>
                    </section>
                    <section className="grid grid-cols-2 w-full">
                        <div className="flex p-4 flex-col items-center border-r border-gray-200 dark:border-opacity-20">
                            <h3 className="whitespace-nowrap text-sm text-gray-400">Dividende annuel</h3>
                            <h4 className="font-bold text-md sm:text-xl">{formatCash(etf.annualDividend)}</h4>
                        </div>
                        <div className="flex p-4 flex-col items-center">
                            <h3 className="whitespace-nowrap text-sm text-gray-400">Dernière ex-date</h3>
                            <h4 className="font-bold text-md sm:text-xl w-max">{formatFrenchDate(new Date(etf.lastExDate))}</h4>
                        </div>
                    </section>
                    <div className="flex justify-center items-center w-full mt-4">
                        <button className={`${styles.secondaryButton}`}>Détails des dividendes</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EtfDividends;
