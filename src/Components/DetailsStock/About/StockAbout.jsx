import React, { useState } from "react";
import styles from "../../../Styles";
import { formatFrenchDate, formatFrenchNumber } from "../../../Utils";

function StockAbout({ stock }) {
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    const gridColClass = "flex flex-col items-center justify-start p-4 border-gray-200 border-r dark:border-opacity-20 text-gray-500 dark:text-gray-300";

    return (
        <section className={`${styles.section}`} id="about">
            <h2 className={`${styles.heading} text-2xl mb-8`}>À propos</h2>
            <div className="flex items-start flex-col xl:flex-row gap-4">
                <article className="flex-1 xl:text-justify relative cursor-pointer" onClick={() => setIsDescriptionExpanded(prev => !prev)}>
                    {!isDescriptionExpanded && <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-bg-dark-secondary to-transparent" />}
                    <p className={`whitespace-pre-line pt-4 ${isDescriptionExpanded ? "" : "mb-4 xl:mb-0 line-clamp-[4] xl:line-clamp-[9]"}`}>
                        {stock.description}
                    </p>
                </article>
                <div className="flex-1 flex flex-col items-end gap-4 w-full xl:w-auto">
                    <section className="flex-1 flex flex-col w-full">
                        <div className="grid grid-cols-2 w-full dark:border-opacity-20 border-gray-200">
                            <article className={gridColClass}>
                                <h3 className="text-sm w-max text-gray-400">Secteur</h3>
                                <h2 className="font-bold text-md sm:text-xl">{stock.sector}</h2>
                            </article>
                            <article className={`${gridColClass} border-r-0`}>
                                <h3 className="text-sm w-max text-gray-400">Industrie</h3>
                                <h2 className="font-bold text-md sm:text-xl text-center">{stock.industry}</h2>
                            </article>
                        </div>
                        <div className="grid grid-cols-2 w-full border-y dark:border-opacity-20 border-gray-200">
                            <article className={gridColClass}>
                                <h3 className="text-sm w-max text-gray-400">Date d'IPO</h3>
                                <h2 className="font-bold text-md sm:text-xl">{formatFrenchDate(new Date(stock.ipoDate))}</h2>
                            </article>
                            <article className={`${gridColClass} border-r-0`}>
                                <h3 className="text-sm w-max text-gray-400">PDG</h3>
                                <h2 className="font-bold text-md sm:text-xl text-center">{stock.ceo}</h2>
                            </article>
                        </div>
                        <div className="grid grid-cols-3 w-full">
                            <article className={gridColClass}>
                                <h3 className="text-sm w-max text-gray-400">Pays</h3>
                                <h2 className="font-bold text-md sm:text-xl">{stock.country}</h2>
                            </article>
                            <article className={gridColClass}>
                                <h3 className="text-sm w-max text-gray-400">Site internet</h3>
                                <h2 className="font-bold text-md sm:text-xl w-max">
                                    <a href={stock.website} target="_blank">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </a>
                                </h2>
                            </article>
                            <article className={`${gridColClass} border-r-0`}>
                                <h3 className="text-sm w-max text-gray-400">Employés</h3>
                                <h2 className="font-bold text-md sm:text-xl">{formatFrenchNumber(Number(stock.fullTimeEmployees))}</h2>
                            </article>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default StockAbout;
