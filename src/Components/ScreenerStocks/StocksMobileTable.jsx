import React from "react";
import { Link } from "react-router-dom";
import { formatCash, getNumber, getNumberSign, getPERColor } from "../../Utils";
import { tableElements } from "./fakeStocksData";

function StocksMobileTable() {
    return (
        tableElements.map((stock, idx) => (
            <Link to={`/stock/${stock.ticker}`} key={idx + "mobile"} className="flex tableBrkpt:hidden flex-col items-start gap-4 w-full px-6 py-2 border-b dark:border-white dark:border-opacity-30" >
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2 max-w-[80%]">
                        <div className="p-1 dark:bg-[#eee] rounded-md">
                            <img src={stock.logo} alt={stock.name} className="w-12 h-12 object-cover rounded-full" />
                        </div>
                        <div className="flex flex-col items-start justify-between gap-2">
                            <div className="flex gap-2 items-center text-gray-300 text-sm">
                                <span>{stock.ticker}</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                <span>{stock.country}</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                <span className="max-w-[8ch] overflow-hidden text-ellipsis truncate">{stock.sector}</span>
                            </div>
                            <h2 className="max-w-[15ch] sm:max-w-[25ch] overflow-hidden text-ellipsis truncate">{stock.name}</h2>
                        </div>
                    </div>
                    <div className="text-left text-primary-clr text-lg">
                        <i className={`${stock.addedToWatchList ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 w-full">
                    <div className="text-left">{formatCash(stock.price)}</div>
                    <div className={`text-left ${getPERColor(stock.PER)}`}>{stock.PER} x</div>
                    <div className="text-left">{stock.yield} %</div>
                    <div
                        className={`text-left py-1 px-2 rounded-lg font-bold w-max flex gap-1 ${stock.priceOver1Year > 0 ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}>
                        <span>{getNumberSign(stock.priceOver1Year)}</span>
                        <span>{getNumber(stock.priceOver1Year)}</span>
                        <span>%</span>
                    </div>
                </div>
            </Link >
        ))
    );
};

export default StocksMobileTable;
