import React, { useState } from "react";
import styles from "../../../Styles";
import { formatFrenchNumber, getNumber, getNumberSign } from "../../../Utils";

function InstitutionalOwnership({ stock }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={`mt-8 mx-0 sm:mx-4 py-6 bg-white dark:bg-bg-dark-secondary rounded-2xl xl:rounded-3xl shadow-headerBox dark:shadow-darkHeaderBox flex-1`}>
            <h2 className={`${styles.heading} text-2xl mb-8 px-4 sm:px-8`}>Actionnariat institutionnel</h2>
            <div className="w-full">
                <div className="flex items-center w-full gap-4 px-4 sm:px-8 py-4 bg-[#eee] dark:bg-bg-dark-hover">
                    <h2 className="flex-[5]">Nom</h2>
                    <h2 className="flex-2 text-right lg:text-center">Actionnariat</h2>
                    <h2 className="flex-[3] text-right hidden sm:block">Parts détenues</h2>
                </div>
                <div className={`w-full overflow-hidden relative cursor-pointer ${stock.institutionalHolders.length > 7 ? !isExpanded ? "h-[336px]" : "h-auto" : ""}`}
                    onClick={() => stock.institutionalHolders.length > 7 ? setIsExpanded(prev => !prev) : null}>
                    {!isExpanded && stock.institutionalHolders.length > 7 && <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-bg-dark-secondary to-transparent z-[9] pointer-events-none" />}
                    {stock.institutionalHolders.map((holder, i) => (
                        <div key={i} className="flex items-center w-full gap-4 px-4 sm:px-8 py-3 border-b border-gray-200 dark:border-opacity-20 relative overflow-visible">
                            <h2 className="flex-[5] whitespace-nowrap overflow-hidden truncate capitalize">{(holder.investorName).toLowerCase()}</h2>
                            <h2 className="flex-2 text-right lg:text-center">{(holder.ownership).toFixed(2)} %</h2>
                            <div className="flex-[3] text-right hidden sm:block">
                                <h2 className="relative group">{formatFrenchNumber(holder.sharesNumber)}
                                    <div className={`absolute hidden group-hover:block top-1/2 -translate-y-1/2 right-full py-1 px-2 w-max rounded-lg text-white ${holder.changeInSharesNumberPercentage > 0 ? "bg-green-600" : holder.changeInSharesNumberPercentage === 0 ? "bg-black" : "bg-red-600"}`}>
                                        {getNumberSign(holder.changeInSharesNumberPercentage)}{getNumber(holder.changeInSharesNumberPercentage)} % vs la période précédente
                                    </div>
                                </h2>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default InstitutionalOwnership;
