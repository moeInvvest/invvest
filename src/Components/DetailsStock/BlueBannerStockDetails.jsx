import React, { useEffect, useState } from "react";
import styles from "../../Styles";
import { formatCash, formatFrenchNumber, getNumber, getNumberSign, getPercentageString } from "../../Utils";

function BlueBannerStockDetails({ stock, children }) {
    const [isFixed, setIsFixed] = useState(false);


    function getPriceProgression(stock) {
        const yearHigh = stock.yearHigh;
        const yearLow = stock.yearLow;
        return (((stock.price - yearLow) * 100) / (yearHigh - yearLow)).toFixed(0);
    };

    useEffect(() => {
        function handleScroll2() {
            if (window.scrollY > 250) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll2);
        window.addEventListener("touchmove", handleScroll2);

        return () => {
            window.removeEventListener("scroll", handleScroll2);
            window.removeEventListener("touchmove", handleScroll2);
        };
    }, [isFixed]);

    return (
        <section className="relative w-full">
            <div className={`w-full top-0 left-0 z-10 bg-white dark:bg-bg-dark-secondary shadow-md dark:shadow-white/10 ${isFixed ? "fixed" : "hidden"}`}>
                <div className="flex justify-between items-center gap-4 mx-auto xl:max-w-[1280px] px-4 py-2" id="fixedBanner">
                    <div className="flex gap-2">
                        <div className="w-10 p-1 bg-[#eee] rounded-md">
                            <img src={stock.logo} alt="ssa" className="min-w-full min-h-full object-cover rounded-md" />
                        </div>
                        <div className="flex items-center gap-4">
                            <h1 className="hidden sm:block font-extrabold font-graphikBold text-md sm:text-xl">{stock.companyName}</h1>
                            <h2 className="hidden sm:block text-gray-500 dark:text-white/60">({stock.symbol})</h2>
                            <h2 className="sm:hidden font-extrabold font-graphikBold text-md sm:text-xl">{stock.symbol}</h2>
                            <i className={`text-primary-clr text-xl sm:text-xl ${stock.addedToWatchList ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <h3 className="font-bold text-md sm:text-xl">{formatCash(stock.price.toFixed(2), undefined, "$")}</h3>
                    </div>
                </div>
            </div>
            <div className="absolute w-full h-[26rem] lg:h-64 bg-gradient-to-r from-[#085BFC] to-[#004ce0] z-[1]" />
            <div className={`${styles.boxWidth} py-8 px-4 w-full mx-auto z-[2] relative flex flex-col gap-8 lg:gap-0 lg:flex-row text-text-light`}>
                <div className="flex flex-col items-start justify-between w-full gap-8">
                    <div className="flex items-center gap-4 w-full" id="logo">
                        <div className="w-16 min-w-[4rem] h-16 min-h-[4rem] p-1 bg-[#eee] rounded-md">
                            <img src={stock.logo} alt="ssa" className="min-w-full min-h-full object-cover rounded-md" />
                        </div>
                        <div className="flex flex-col items-start w-full lg:w-auto">
                            <div className="flex items-center gap-8 w-full justify-between">
                                <h1 className="font-extrabold font-graphikBold text-md sm:text-3xl">{stock.companyName}</h1>
                                <i className={`text-white text-xl sm:text-2xl ${stock.addedToWatchList ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                            </div>
                            <h2 className="text-white/60">{stock.symbol} - {stock.isin}</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-8 w-full">
                        <div className="flex flex-col items-start">
                            <h3 className="font-bold">{formatCash(stock.marketcap, "nonDecimal", "$")}</h3>
                            <h3 className="uppercase text-white/60">Capitalisation</h3>
                        </div>
                        <div className="flex flex-col items-start">
                            <h3 className="font-bold">{stock.sector}</h3>
                            <h3 className="uppercase text-white/60">Secteur</h3>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-8 lg:gap-0">
                    <div className="flex items-center gap-8">
                        <div className="flex flex-col items-start sm:mr-8">
                            <h3 className="font-bold">{formatCash(stock.price.toFixed(2), undefined, "$")}</h3>
                            <h3 className="uppercase text-white/60 whitespace-nowrap">Prix</h3>
                        </div>
                        <div className="flex flex-col items-start">
                            {getPercentageString(stock.performance["1M"].toFixed(2))}
                            <h3 className="text-white/60 whitespace-nowrap">1M</h3>
                        </div>
                        <div className="flex flex-col items-start">
                            {getPercentageString(stock.performance["1Y"].toFixed(2))}
                            <h3 className="text-white/60 whitespace-nowrap">1A</h3>
                        </div>
                        <div className="hidden xxsm:flex flex-col items-start">
                            {getPercentageString(stock.performance["5Y"].toFixed(2))}
                            <h3 className="text-white/60 whitespace-nowrap">5A</h3>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between w-full">
                            <h3 className="font-bold whitespace-nowrap">
                                {formatCash(stock.yearLow, undefined, "$")}
                            </h3>
                            <h3 className="font-bold whitespace-nowrap">
                                {formatCash(stock.yearHigh, undefined, "$")}
                            </h3>
                        </div>
                        <div className="flex items-center justify-between gap-4 w-full">
                            <h3 className="text-white/60 whitespace-nowrap">1A BAS</h3>
                            <div className="w-full h-4 rounded-full bg-white/70 relative">
                                <div className={`absolute h-full bg-white rounded-full`} style={{ width: `${getPriceProgression(stock)}%` }} />
                            </div>
                            <h3 className="text-white/60 whitespace-nowrap">1A HAUT</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.boxWidth} w-full mx-auto`}>
                {children}
            </div>
        </section>
    );
};

export default BlueBannerStockDetails;
