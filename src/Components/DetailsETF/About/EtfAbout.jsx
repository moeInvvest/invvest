import React, { useState } from "react";
import styles from "../../../Styles";
import { formatFrenchDate } from "../../../Utils";

function EtfAbout({ etf }) {
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    const gridColClass = "flex flex-col items-center p-4 border-gray-200 border-r dark:border-opacity-20 text-gray-500 dark:text-gray-300";

    return (
        <section className={`${styles.section}`} id="about">
            <h2 className={`${styles.heading} text-2xl mb-8`}>À propos</h2>
            <div className="flex items-start flex-col lg:flex-row gap-4">
                <article className="flex-1 lg:text-justify relative cursor-pointer" onClick={() => setIsDescriptionExpanded(prev => !prev)}>
                    {!isDescriptionExpanded && <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-bg-dark-secondary to-transparent" />}
                    {/* {etf.description} */}
                    <p className={`${isDescriptionExpanded ? "" : "mb-4 lg:mb-0 line-clamp-[4] lg:line-clamp-[9]"}`}>
                        {etf.description}
                    </p>
                </article>
                <section className="flex-1 flex flex-col w-full">
                    <article className="flex flex-col items-center pb-4 border-gray-200 text-gray-500 dark:text-gray-300 w-full">
                        <h3 className="text-sm w-max text-gray-400">Indice de référence</h3>
                        <h2 className="font-bold text-md sm:text-xl">{etf.index}</h2>
                    </article>
                    <div className="grid grid-cols-3 w-full border-y dark:border-opacity-20 border-gray-200">
                        <article className={gridColClass}>
                            <h3 className="text-sm w-max text-gray-400">Catégorie</h3>
                            <h2 className="font-bold text-md sm:text-xl">{etf.assetClass}</h2>
                        </article>
                        <article className={gridColClass}>
                            <h3 className="text-sm w-max text-gray-400">Juridiction</h3>
                            <h2 className="font-bold text-md sm:text-xl">{etf.domicile}</h2>
                        </article>
                        <article className={`${gridColClass} border-r-0`}>
                            <h3 className="text-sm w-max text-gray-400">Devise</h3>
                            <h2 className="font-bold text-md sm:text-xl">{etf.navCurrency}</h2>
                        </article>
                    </div>
                    <div className="grid grid-cols-3 w-full">
                        <article className={gridColClass}>
                            <h3 className="text-sm w-max text-gray-400">Fournisseur</h3>
                            <h2 className="font-bold text-md sm:text-xl">{etf.etfCompany}</h2>
                        </article>
                        <article className={gridColClass}>
                            <h3 className="text-sm w-max text-gray-400">Date de création</h3>
                            <h2 className="font-bold text-md sm:text-xl w-max">{formatFrenchDate(new Date(etf.inceptionDate))}</h2>
                        </article>
                        <article className={`${gridColClass} border-r-0`}>
                            <h3 className="text-sm w-max text-gray-400">Gestion</h3>
                            <h2 className="font-bold text-md sm:text-xl">{etf.managementStrategy}</h2>
                        </article>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default EtfAbout;
