import React from "react";
import { formatFrenchDate, getESGScoreColor } from "../../../Utils";

function EtfStatistics({ etf }) {
    const gridColClass = "flex flex-col items-center p-4 border-gray-200 border-r dark:border-opacity-20 text-gray-500 dark:text-gray-300";
    function getYesOrNo(str) {
        if (str.toLowerCase() === "non") return "text-red-600";
        if (str.toLowerCase() === "oui") return "text-green-600";
    };

    return (
        <div className="flex-1 flex flex-col items-end gap-4 w-full xl:w-auto">
            <section className="grid grid-cols-3 w-full">
                <article className={gridColClass}>
                    <h3 className="text-sm w-max text-gray-400">Rendement</h3>
                    <h2 className="font-bold text-md sm:text-xl">{etf.yield} %</h2>
                </article>
                <article className={gridColClass}>
                    <h3 className="text-sm w-max text-gray-400">Fraix annuel</h3>
                    <h2 className="font-bold text-md sm:text-xl">{etf.expenseRatio} %</h2>
                </article>
                <article className={`${gridColClass} border-r-0`}>
                    <h3 className="text-sm w-max text-gray-400">Composants</h3>
                    <h2 className="font-bold text-md sm:text-xl">{etf.holdingsCount}</h2>
                </article>
                <article className={`${gridColClass} border-y`}>
                    <h3 className="text-sm w-max text-gray-400">Distribution</h3>
                    <h2 className="font-bold text-md sm:text-xl">{etf.distribution}</h2>
                </article>
                <article className={`${gridColClass} ${getESGScoreColor(etf.ESGScore)} text-white`}>
                    <h3 className="text-sm w-max text-white">Score ESG</h3>
                    <h2 className="font-bold text-md sm:text-xl text-white">{etf.ESGScore}</h2>
                </article>
                <article className={`${gridColClass} border-y border-r-0`}>
                    <h3 className="text-sm w-max text-gray-400">Replication</h3>
                    <h2 className="font-bold text-md sm:text-xl">{etf.replication}</h2>
                </article>
                <article className={gridColClass}>
                    <h3 className="text-sm w-max text-gray-400">PEA</h3>
                    <h2 className={`font-bold text-md sm:text-xl ${getYesOrNo(etf.PEA)}`}>{etf.PEA}</h2>
                </article>
                <article className={gridColClass}>
                    <h3 className="text-sm w-max text-gray-400">UCITS</h3>
                    <h2 className={`font-bold text-md sm:text-xl ${getYesOrNo(etf.UCITS)}`}>{etf.UCITS}</h2>
                </article>
                <article className={`${gridColClass} border-r-0`}>
                    <h3 className="text-sm w-max text-gray-400">Devise couverte</h3>
                    <h2 className={`font-bold text-md sm:text-xl ${getYesOrNo(etf.currencyHedged)}`}>{etf.currencyHedged}</h2>
                </article>
            </section>
            <h2 className="text-right text-xs flex items-center gap-2 whitespace-nowrap">
                <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Dernière mise à jour : {formatFrenchDate(new Date())}
            </h2>
        </div>
    );
}

export default EtfStatistics;
