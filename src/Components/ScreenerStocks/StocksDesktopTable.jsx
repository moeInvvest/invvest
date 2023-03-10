import React from "react";
import { formatCash, getNumber, getNumberSign, getPERColor, getScoreColor } from "../../Utils";
import { tableElements } from "./fakeStocksData";
import { iconPro } from "../../Assets";
import { Link } from "react-router-dom";

function StocksDesktopTable({ gridTemplateColumnsClasses }) {
    return (
        <>
            {tableElements.map((stock, idx) => (
                <Link to={`/stock/${stock.ticker}`} key={idx} className={`hidden tableBrkpt:grid items-center ${gridTemplateColumnsClasses} gap-4 border-b dark:border-white dark:border-opacity-30 px-8 py-4 hover:bg-secondary-btn-hover dark:hover:bg-bg-dark-hover transition-all cursor-pointer`}>
                    <div className="flex items-center gap-2">
                        <div className="w-14 h-14 p-1 dark:bg-[#eee] rounded-md">
                            <img src={stock.logo} alt={stock.name} className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="flex flex-col items-start justify-between gap-2">
                            <div className="flex gap-2 items-center text-gray-300 text-sm">
                                <span>{stock.ticker}</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                <span>{stock.country}</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                <span>{stock.sector}</span>
                            </div>
                            <h2 className="max-w-[23ch] overflow-hidden text-ellipsis truncate">{stock.name}</h2>
                        </div>
                    </div>
                    <div className="text-left">{formatCash(stock.price)}</div>
                    <div className={`text-left ${getPERColor(stock.PER)}`}>{stock.PER} x</div>
                    <div className="text-left">{stock.yield} %</div>
                    <div className="text-left hidden lg:block">{stock.divUninter} ans</div>
                    {stock.isPro ?
                        <>
                            <div className={`text-center text-white py-1 rounded-lg font-bold w-[4ch] hidden xxl:block ${getScoreColor(stock.divScore)}`}>
                                {stock.divScore ? stock.divScore : "-"}
                            </div>
                            <div className={`text-center text-white py-1 rounded-lg font-bold w-[4ch] hidden xxl:block ${getScoreColor(stock.croissanceScore)}`}>
                                {stock.croissanceScore ? stock.croissanceScore : "-"}
                            </div>
                        </>
                        :
                        <>
                            <div className={`p-1 rounded-lg w-[4ch] hidden xxl:flex bg-bg-yellow items-center justify-center`}>
                                <img src={iconPro} alt="" className="w-5 h-5 object-cover" />
                            </div>
                            <div className={`p-1 rounded-lg w-[4ch] hidden xxl:flex bg-bg-yellow items-center justify-center`}>
                                <img src={iconPro} alt="" className="w-5 h-5 object-cover" />
                            </div>
                        </>
                    }
                    <div className={`text-left py-1 px-2 rounded-lg font-bold w-max flex gap-1 ${stock.priceOver1Year > 0 ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}>
                        <span>{getNumberSign(stock.priceOver1Year)}</span>
                        <span>{getNumber(stock.priceOver1Year)}</span>
                        <span>%</span>
                    </div>
                    <div className="text-left text-primary-clr text-lg">
                        <i className={`${stock.addedToWatchList ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default StocksDesktopTable;
