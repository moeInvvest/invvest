import React from "react";
import { formatCash, formatFrenchDate, getNumber } from "../../../Utils";

function CryptoStatistics({ crypto }) {

    const gridColClass = "flex flex-col items-center p-4 border-gray-200 border-r dark:border-opacity-20 text-gray-500 dark:text-gray-300";
    return (
        <div className="flex-1 flex flex-col items-end gap-4 w-full xl:w-auto">
            <section className="grid grid-cols-3 w-full">
                <article className={gridColClass}>
                    <h3 className="text-sm w-max text-gray-400">Volume (24H)</h3>
                    <h2 className="font-bold text-md sm:text-xl">{formatCash(crypto.volume_24h, "nonDecimal", "$")}</h2>
                </article>
                <article className={gridColClass}>
                    <h3 className="text-sm w-max text-gray-400">Volume / Cap</h3>
                    <h2 className="font-bold text-md sm:text-xl">{getNumber(crypto.volume_over_cap)} %</h2>
                </article>
                <article className={`${gridColClass} border-r-0`}>
                    <h3 className="text-sm w-max text-gray-400">Domination</h3>
                    <h2 className="font-bold text-md sm:text-xl">{getNumber(crypto.domination)} %</h2>
                </article>

                <article className={`${gridColClass} border-t`}>
                    <h3 className="text-sm w-max text-gray-400">Type</h3>
                    <h2 className="font-bold text-md sm:text-xl">{crypto.type}</h2>
                </article>
                <article className={`${gridColClass} border-t`}>
                    <h3 className="text-sm w-max text-gray-400">Preuve</h3>
                    <h2 className="font-bold text-md sm:text-xl w-max">{crypto.proof_type}</h2>
                </article>
                <article className={`${gridColClass} border-t border-r-0`}>
                    <h3 className="text-sm w-max text-gray-400">Algorithme</h3>
                    <h2 className="font-bold text-md sm:text-xl">{crypto.hash_algorithm}</h2>
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

export default CryptoStatistics;
