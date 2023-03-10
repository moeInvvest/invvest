import React from "react";
import { Link } from "react-router-dom";
import { currencyFormatter, getNumber, getNumberSign } from "../../Utils";
import { fakeETFsData } from "./fakeETFsData";

function ETFsMobileTable() {
    return (
        <div className="flex tableBrkpt:hidden flex-col gap-4 tableBrkpt:gap-0">
            {
                fakeETFsData.map((etf, idx) => (
                    <Link to={`/etf/${etf.ticker}`} key={`mobile${idx}`} className="flex flex-col items-start gap-4 w-full px-6 py-2 border-b dark:border-white dark:border-opacity-30">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-2">
                                <div className="p-1 dark:bg-[#eee] rounded-md">
                                    <img src={etf.logo} alt={etf.name} className="w-12 h-12 object-cover rounded-full" />
                                </div>
                                <div className="flex flex-col items-start justify-between gap-2">
                                    <div className="flex gap-2 items-center text-gray-300 text-sm">
                                        <span>{etf.ticker}</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                        <span>{etf.country}</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                        <span>{etf.exposition}</span>
                                    </div>
                                    <h2 className="max-w-[22ch] xsm:max-w-[25ch] sm:max-w-[400px] overflow-hidden text-ellipsis truncate">{etf.name}</h2>
                                </div>
                            </div>
                            <div className="text-left text-primary-clr text-lg">
                                <i className={`${etf.addedToWatchList ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 w-full">
                            <div className="text-left">{currencyFormatter.format(etf.price)}</div>
                            <div className="text-left">{etf.yield} %</div>
                            <div className={`text-left`}>{etf.fees} %</div>
                            <div
                                className={`text-left py-1 px-2 rounded-lg font-bold w-max flex gap-1 ${etf.priceOver1Year > 0 ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}>
                                <span>{getNumberSign(etf.priceOver1Year)}</span>
                                <span>{getNumber(etf.priceOver1Year)}</span>
                                <span>%</span>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    );
};

export default ETFsMobileTable;
