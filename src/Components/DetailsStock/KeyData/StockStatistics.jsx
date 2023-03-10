import React from "react";
import { formatCash, formatFrenchDate, getESGScoreColor, getPERColor, getScoreColor } from "../../../Utils";

function StockStatistics({ stock }) {

    const gridColClass = "flex flex-col items-center p-4 border-gray-200 border-r dark:border-opacity-20 text-gray-500 dark:text-gray-300";

    return (
        <div className="flex-1 flex flex-col items-end gap-4 w-full xl:w-auto">
            <section className="grid grid-cols-3 w-full">
                <article className={gridColClass}>
                    <h3 className="text-sm w-max text-gray-400">Rendement</h3>
                    <h2 className="font-bold text-md sm:text-xl">{stock.yield} %</h2>
                </article>
                <article className={`${gridColClass}`}>
                    <h3 className="text-sm w-max text-gray-400">PER</h3>
                    <h2 className="font-bold text-md sm:text-xl">{stock.PER} x</h2>
                </article>
                <article className={`${gridColClass} border-r-0`}>
                    <h3 className="text-sm w-max text-gray-400">Beta</h3>
                    <h2 className="font-bold text-md sm:text-xl">{(stock.beta).toFixed(2)}</h2>
                </article>
                <article className={`${gridColClass} border-y ${getScoreColor(stock.dividendScore)}`}>
                    <h3 className="hidden sm:block text-sm w-max text-white">Score dividende</h3>
                    <h3 className="block sm:hidden text-sm w-max text-white">Score div.</h3>
                    <h2 className="font-bold text-md sm:text-xl text-white">{stock.dividendScore}</h2>
                </article>
                <article className={`${gridColClass} ${getScoreColor(stock.growthScore)}`}>
                    <h3 className="hidden sm:block text-sm w-max text-white">Score croissance</h3>
                    <h3 className="block sm:hidden text-sm w-max text-white">Score crois.</h3>
                    <h2 className="font-bold text-md sm:text-xl text-white">{stock.growthScore}</h2>
                </article>
                <article className={`${gridColClass} border-y border-r-0 ${getESGScoreColor(stock.ESGScore)}`}>
                    <h3 className="text-sm w-max text-white">Score ESG</h3>
                    <h2 className="font-bold text-md sm:text-xl text-white">{stock.ESGScore}</h2>
                </article>
                <article className={gridColClass}>
                    <h3 className="hidden sm:block text-sm w-max text-gray-400">Bénéfice par action</h3>
                    <h3 className="block sm:hidden text-sm w-max text-gray-400">Bénéf. / action</h3>
                    <h2 className={`font-bold text-md sm:text-xl`}>{formatCash((stock.EPS).toFixed(2), undefined, "$")}</h2>
                </article>
                <article className={gridColClass}>
                    <h3 className="hidden sm:block text-sm w-max text-gray-400">Croissance dividende</h3>
                    <h3 className="block sm:hidden text-sm w-max text-gray-400">Croissance div.</h3>
                    <h2 className={`font-bold text-md sm:text-xl`}>{stock.dividendGrowth} % / an</h2>
                </article>
                <article className={`${gridColClass} border-r-0`}>
                    <h3 className="text-sm w-max text-gray-400">Domination</h3>
                    <h2 className={`font-bold text-md sm:text-xl`}>{(stock.domination).toFixed(2)} %</h2>
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

export default StockStatistics;
