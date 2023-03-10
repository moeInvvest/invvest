import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles";
import { getNumber, getNumberSign } from "../../Utils";

function ScreenerHeader({ headerData }) {
    return (
        <section className={`${styles.section} mt-0 relative z-[2]`}>
            <div className="block lg:hidden absolute bg-gradient-to-l from-white dark:from-bg-dark-secondary w-24 rounded-r-2xl top-0 h-full right-0 z-50 rounded-r-0 pointer-events-none" />
            <div className="flex flex-row items-center overflow-x-scroll scrollbar-hidden">
                {headerData.map(({ heading, goto, datas }, idx) => (
                    <div key={idx} className={`flex flex-col min-w-[394px] items-start gap-4 w-full ${idx !== 2 ? "border-r" : ""} border-black/10 dark:border-white/10 ${idx === 0 ? "pr-6" : idx === 1 ? "px-6" : "pl-6"}`}>
                        <div className="flex justify-between items-center w-full">
                            <h2 className={styles.heading}>{heading}</h2>
                            <Link to={goto} className="text-sm">Plus <i className="fa-solid fa-arrow-right ml-2"></i></Link>
                        </div>
                        {datas.map(({ icon, name, percentage, ticker, negative }, idx) => (
                            <div className="flex items-center gap-3 w-full" key={name + idx}>
                                <span className="text-black/30 dark:text-white/30">{idx + 1}</span>
                                <div className="flex justify-between-items-center w-full">
                                    <div className="flex items-center gap-4 w-full">
                                        <img src={icon} alt={`${name}-icon`} className="w-7 h-7 object-cover rounded-full" />
                                        <div className="flex items-center gap-2">
                                            <Link to={`/stock/ADCD`} className="text-ellipsis overflow-hidden truncate max-w-[12ch]">{name}</Link>
                                            <span className="text-black/40 dark:text-white/40">({ticker})</span>
                                        </div>
                                    </div>
                                    <p className={`flex justify-center gap-1 rounded-lg px-2 py-1 ${percentage <= 0 ? "text-red-700 bg-red-100" : "text-green-700 bg-green-100"} text-sm font-bold`}>
                                        <span>{getNumberSign(percentage)}</span>
                                        {getNumber(percentage)}
                                        <span>%</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ScreenerHeader;
