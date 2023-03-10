import React from "react";
import { Link } from "react-router-dom";
import { formatCash, getESGScoreColor, getNumber, getNumberSign } from "../../Utils";
import { fakeETFsData } from "./fakeETFsData";

function ETFsDesktopTable({ gridTemplateColumnsClasses }) {
    return (
        <>
            {fakeETFsData.map((etf, idx) => (
                <Link to={`/etf/${etf.ticker}`} key={idx} className={`hidden tableBrkpt:grid items-center ${gridTemplateColumnsClasses} gap-4 border-b dark:border-white dark:border-opacity-30 px-8 py-4 hover:bg-secondary-btn-hover dark:hover:bg-bg-dark-hover transition-all cursor-pointer`}>
                    <div className="flex items-center gap-2">
                        <div className="w-14 h-14 p-1 dark:bg-[#eee] rounded-md">
                            <img src={etf.logo} alt={etf.name} className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="flex flex-col items-start justify-between gap-2">
                            <div className="flex gap-2 items-center text-gray-300 text-sm">
                                <span>{etf.ticker}</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                <span>{etf.country}</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                <span>{etf.exposition}</span>
                            </div>
                            <h2 className="max-w-[20ch] lg:max-w-[28ch] overflow-hidden text-ellipsis truncate">{etf.name}</h2>
                        </div>
                    </div>
                    <div>{formatCash(etf.price)}</div>
                    <div>{etf.yield} %</div>
                    <div>{etf.fees} %</div>
                    <div className={`text-center text-white py-1 rounded-lg font-bold w-[4ch] hidden lg:block ${getESGScoreColor(etf.ESGScore)}`}>{etf.ESGScore}</div>
                    <div className={`text-left py-1 px-2 rounded-lg font-bold w-max flex gap-1 ${etf.priceOver1Year > 0 ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}>
                        <span>{getNumberSign(etf.priceOver1Year)}</span>
                        <span>{getNumber(etf.priceOver1Year)}</span>
                        <span>%</span>
                    </div>
                    <div className="text-primary-clr text-lg">
                        <i className={`${etf.addedToWatchList ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default ETFsDesktopTable;
