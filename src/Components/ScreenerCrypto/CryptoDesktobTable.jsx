import React from "react";
import { Link } from "react-router-dom";
import { formatCash, getNumber, getNumberSign } from "../../Utils";
import { fakeCryptoTable } from "./fakeCryptosData";

function CryptoDesktobTable({ gridTemplateColumnsClasses }) {
    return (
        <>
            {fakeCryptoTable.map((crypto, idx) => (
                <Link to={`/crypto/${crypto.ticker}`} key={idx} className={`hidden lg:grid items-center ${gridTemplateColumnsClasses} gap-4 border-b dark:border-white dark:border-opacity-30 px-8 py-4 hover:bg-secondary-btn-hover dark:hover:bg-bg-dark-hover transition-all cursor-pointer`}>
                    <div className="flex items-center gap-2">
                        <div className="w-14 h-14 p-1 dark:bg-[#eee] rounded-md">
                            <img src={crypto.logo} alt={crypto.name} className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="flex flex-col items-start justify-between gap-2">
                            <div className="flex gap-2 items-center text-gray-300 text-sm">
                                <span>{crypto.ticker}</span>
                            </div>
                            <h2 className="max-w-[23ch] overflow-hidden text-ellipsis truncate">{crypto.name}</h2>
                        </div>
                    </div>
                    <div>{formatCash(crypto.price, undefined, "$")}</div>
                    <div>{formatCash(crypto.marketcap, "nonDecimal", "$")}</div>
                    <div className="hidden xxl:block">{formatCash(crypto.volume24h, "nonDecimal", "$")}</div>
                    <div className={`text-left py-1 px-2 rounded-lg font-bold w-max flex gap-1 ${crypto.priceOver7days > 0 ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}>
                        <span>{getNumberSign(crypto.priceOver7days)}</span>
                        <span>{getNumber(crypto.priceOver7days)}</span>
                        <span>%</span>
                    </div>
                    <div className={`text-left py-1 px-2 rounded-lg font-bold w-max flex gap-1 ${crypto.priceOver1Year > 0 ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}>
                        <span>{getNumberSign(crypto.priceOver1Year)}</span>
                        <span>{getNumber(crypto.priceOver1Year)}</span>
                        <span>%</span>
                    </div>
                    <div className="text-left text-primary-clr text-lg">
                        <i className={`${crypto.addedToWatchList ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default CryptoDesktobTable;
