import React from "react";
import { formatCash, currencyFormatterEuro, getNumber, getNumberSign } from "../../Utils";
import HeaderChart from "./HeaderChart";

function SinglePublicPortfolio({ portfolio }) {
    return (
        <article className="flex flex-col items-start rounded-3xl bg-white shadow-headerBox dark:shadow-darkHeaderBox dark:bg-bg-dark-secondary pb-8">
            <div className="h-32 w-full">
                <HeaderChart portfolio={portfolio} />
            </div>
            <div className="flex items-start justify-between w-full px-4 mt-4">
                <div className="flex items-center gap-4 w-full mb-8">
                    <img src={portfolio.avatar} alt={portfolio.portfolioName} className="w-14 h-14 object-cover" />
                    <div className="flex flex-col items-start gap-2">
                        <h3 className="text-gray-300 text-sm">{portfolio.firstName}</h3>
                        <p className="max-w-[18ch] truncate">{portfolio.portfolioName}</p>
                    </div>
                </div>
                <div className={`py-1 px-2 rounded-lg font-bold flex gap-1 ${portfolio.percentage > 0 ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}>
                    <span>{getNumberSign(portfolio.percentage)}</span>
                    <span>{getNumber(portfolio.percentage)}</span>
                    <span className="whitespace-nowrap">% / an</span>
                </div>
            </div>
            <div className="flex items-center justify-between gap-4 w-full px-4">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-gray-300 text-sm">VALEUR</span>
                    <p className="font-bold">{currencyFormatterEuro.format(portfolio.value)}</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-gray-300 text-sm">POSITIONS</span>
                    <p className="font-bold">{portfolio.positions}</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-gray-300 text-sm">RENDEMENT</span>
                    <p className="font-bold">
                        <span>{portfolio.yield} %</span>
                    </p>
                </div>
            </div>
        </article>
    );
};

export default SinglePublicPortfolio;

