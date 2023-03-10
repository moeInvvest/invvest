import React from "react";
import { Link } from "react-router-dom";
import { formatCash, getNumber, getNumberSign } from "../../Utils";
import { fakeCryptoTable } from "./fakeCryptosData";

function CryptoMobileTable() {
    return (
        <>
            {fakeCryptoTable.map((crypto, idx) => (
                <Link to={`/crypto/${crypto.ticker}`} key={`mobile${idx}`} className="flex lg:hidden flex-col items-start gap-4 w-full px-6 py-2 border-b dark:border-white dark:border-opacity-30">
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                            <div className="p-1 dark:bg-[#eee] rounded-md">
                                <img src={crypto.logo} alt={crypto.name} className="w-12 h-12 object-cover rounded-full" />
                            </div>
                            <div className="flex flex-col items-start justify-between gap-2">
                                <div className="flex gap-2 items-center text-gray-300 text-sm">
                                    <span>{crypto.ticker}</span>
                                </div>
                                <h2 className="max-w-[22ch] xsm:max-w-[25ch] sm:max-w-[400px] overflow-hidden text-ellipsis truncate">{crypto.name}</h2>
                            </div>
                        </div>
                        <div className="text-left text-primary-clr text-lg">
                            <i className={`${crypto.addedToWatchList ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 tableBrkpt:grid-cols-4 gap-4 w-full">
                        <div>{formatCash(crypto.price, undefined, "$")}</div>
                        <div className="hidden tableBrkpt:block">{formatCash(crypto.marketcap, "nonDecimal", "$")}</div>
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
                    </div>
                </Link>
            ))}
        </>
    );
}

export default CryptoMobileTable;
