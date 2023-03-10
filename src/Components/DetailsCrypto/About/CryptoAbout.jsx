import React, { useState } from "react";
import styles from "../../../Styles";
import { formatFrenchDate } from "../../../Utils";

function CryptoAbout({ crypto }) {
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    const gridColClass = "flex flex-col items-center justify-start p-4 border-gray-200 border-r dark:border-opacity-20 text-gray-500 dark:text-gray-300";

    return (
        <section className={`${styles.section}`} id="about">
            <h2 className={`${styles.heading} text-2xl mb-8`}>À propos</h2>
            <div className="flex items-start flex-col xl:flex-row gap-4">
                <article className="flex-1 xl:text-justify relative cursor-pointer" onClick={() => setIsDescriptionExpanded(prev => !prev)}>
                    {!isDescriptionExpanded && <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-bg-dark-secondary to-transparent" />}
                    <p className={`${isDescriptionExpanded ? "" : "mb-4 xl:mb-0 line-clamp-[4] xl:line-clamp-[9]"}`}>
                        {crypto.description}
                    </p>
                </article>
                <div className="flex-1 flex flex-col items-end gap-4 w-full xl:w-auto">
                    <section className="grid grid-cols-3 w-full">
                        <article className={`${gridColClass} pt-0`}>
                            <h3 className="text-sm w-max text-gray-400">Date de lancement</h3>
                            <h2 className="font-bold text-md sm:text-xl text-center">{formatFrenchDate(new Date())}</h2>
                        </article>
                        <article className={`${gridColClass} pt-0`}>
                            <h3 className="text-sm w-max text-gray-400">Structure</h3>
                            <h2 className="font-bold text-md sm:text-xl">{crypto.org_structure}</h2>
                        </article>
                        <article className={`${gridColClass} pt-0 border-r-0`}>
                            <h3 className="text-sm w-max text-gray-400">Open source</h3>
                            <h2 className={`font-bold text-md sm:text-xl ${crypto.open_source ? "text-green-600" : "text-red-600"}`}>{crypto.open_source ? "Oui" : "Non"}</h2>
                        </article>
                        <article className={`${gridColClass} border-y`}>
                            <h3 className="text-sm w-max text-gray-400">Hardware wallet</h3>
                            <h2 className={`font-bold text-md sm:text-xl ${crypto.hardware_wallet ? "text-green-600" : "text-red-600"}`}>{crypto.hardware_wallet ? "Oui" : "Non"}</h2>
                        </article>
                        <article className={`${gridColClass} border-y`}>
                            <h3 className="text-sm w-max text-gray-400">Site</h3>
                            <h2 className="font-bold text-md sm:text-xl">
                                <a href={crypto.website} target="_blank">
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                            </h2>
                        </article>
                        <article className={`${gridColClass}  border-y border-r-0`}>
                            <h3 className="text-sm w-max text-gray-400">Papier blanc</h3>
                            <h2 className="font-bold text-md sm:text-xl w-max">
                                <a href={crypto.whitepaper} target="_blank">
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                            </h2>
                        </article>
                        <article className={`${gridColClass}`}>
                            <h3 className="text-sm w-max text-gray-400">Code source</h3>
                            <h2 className="font-bold text-md sm:text-xl">
                                <a href={crypto.source_code} target="_blank">
                                    <i className="fa-brands fa-github text-2xl"></i>
                                </a>
                            </h2>
                        </article>
                        <article className={`${gridColClass}`}>
                            <h3 className="text-sm w-max text-gray-400">Twitter</h3>
                            <h2 className="font-bold text-md sm:text-xl">
                                <a href={crypto.twitter} target="_blank">
                                    <i className="fa-brands fa-twitter text-2xl"></i>
                                </a>
                            </h2>
                        </article>
                        <article className={`${gridColClass} border-r-0`}>
                            <h3 className="text-sm w-max text-gray-400">Reddit</h3>
                            <h2 className="font-bold text-md sm:text-xl">
                                <a href={crypto.reddit} target="_blank">
                                    <i className="fa-brands fa-reddit text-2xl"></i>
                                </a>
                            </h2>
                        </article>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default CryptoAbout;
