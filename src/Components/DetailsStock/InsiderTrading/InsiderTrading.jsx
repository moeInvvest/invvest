import React, { useState } from "react";
import styles from "../../../Styles";
import { formatCash, formatFrenchDate, formatFrenchNumber } from "../../../Utils";

function translateTransactionType(type) {
    if (type === "S-Sale") {
        return "Vente"
    } else if (type === "P-Purchase") {
        return "Achat"
    }
};

function InsiderTrading({ stock }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={`mt-8 mx-0 sm:mx-4 py-6 bg-white dark:bg-bg-dark-secondary rounded-2xl xl:rounded-3xl shadow-headerBox dark:shadow-darkHeaderBox flex-2`}>
            <h2 className={`${styles.heading} text-2xl mb-8 px-4 sm:px-8`}>Transactions d'insider récentes</h2>
            <div className="w-full">
                <div className="flex items-center w-full gap-4 px-4 sm:px-8 py-4 bg-[#eee] dark:bg-bg-dark-hover">
                    <h2 className="flex-[4]">Nom</h2>
                    <h2 className="flex-2 text-right lg:text-left">Transaction</h2>
                    <h2 className="flex-2 text-left hidden lg:block">Prix / action</h2>
                    <h2 className="flex-2 text-left hidden lg:block">Parts</h2>
                    <h2 className="flex-2 text-left hidden lg:block">Valeur totale</h2>
                </div>
                <div className="w-full relative">
                    {!isExpanded && stock.insiderTrading.length > 5 && <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-bg-dark-secondary to-transparent z-[9] pointer-events-none" />}
                    {stock.insiderTrading.map((member, i) => (
                        <div key={i} className={`${i > 4 && !isExpanded ? "hidden" : "flex"} items-center w-full gap-4 px-4 sm:px-8 py-3 border-b border-gray-200 dark:border-opacity-20 cursor-pointer relative`} onClick={() => stock.insiderTrading.length > 5 ? setIsExpanded(prev => !prev) : null}>
                            <div className="flex flex-col items-start flex-[4]">
                                <h2 className="capitalize">{(member.reportingName).toLowerCase()}</h2>
                                <h2 className="text-gray-400 text-sm">{member.typeOfOwner}</h2>
                            </div>
                            <div className="flex-2 flex flex-col items-end lg:items-start">
                                <h2 className={`${translateTransactionType(member.transactionType) === "Achat" ? "text-green-500" : "text-red-500"}`}>{translateTransactionType(member.transactionType)}</h2>
                                <h2 className="text-gray-400 text-sm">{formatFrenchDate(new Date(member.transactionDate), "short")}</h2>
                            </div>
                            <div className="flex-2 hidden lg:block">{formatCash(member.price, undefined, "$")}</div>
                            <h2 className="flex-2 hidden lg:block">{formatFrenchNumber(member.securitiesTransacted)}</h2>
                            <div className="flex-2 hidden lg:block">{formatCash(member.totalValue, "nonDecimal", "$")}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InsiderTrading;
