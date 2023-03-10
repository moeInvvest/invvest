import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles";
import { formatCash, percentageBubble } from "../../Utils";
import CryptoDesktobTable from "./CryptoDesktobTable";
import CryptoMobileTable from "./CryptoMobileTable";
import { fakeCryptoTable } from "./fakeCryptosData";

function CryptosTable() {
    const [loading, setLoading] = useState(true);
    const [isFixed, setIsFixed] = useState(false);
    const [theadTopPosition, setTheadTopPosition] = useState(null);
    const theadRef = useRef(null);

    useEffect(() => {
        setTheadTopPosition(theadRef.current?.offsetTop);
    }, []);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > theadTopPosition) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchmove", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchmove", handleScroll);
        };
    }, [isFixed]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <section className={`mt-8 mx-0 sm:mx-4 py-6 bg-white dark:bg-bg-dark-secondary rounded-2xl xl:rounded-3xl shadow-headerBox dark:shadow-darkHeaderBox overflow-x-hidden`}>
            <div className="w-full px-4 lg:px-8">
                <div className={`${isFixed ? `fixed z-10 top-[72px] left-0 w-full bg-white dark:bg-bg-dark-secondary shadow-md dark:shadow-white/10` : ""}`}>
                    <div className={`w-full flex justify-between font-bold ${isFixed ? `pb-2 ${styles.boxWidth} w-full px-4 sm:px-8 lg:px-12` : ""}`} ref={theadRef}>
                        <div className="text-left hidden lg:block w-[200px]">Nom</div>
                        <div className="w-full flex items-center lg:flex-[10]">
                            <div className="flex-2 text-left lg:flex-[3] lg:text-center">Prix</div>
                            <div className="flex-[3] text-center hidden sm:block">Capitalisation</div>
                            <div className="flex-[3] text-center hidden xl:block">Volume (24h)</div>
                            <div className="flex-2 text-center">7J</div>
                            <div className="flex-2 text-right lg:text-center">1A</div>
                        </div>
                        <div className="flex-1 text-center"></div>
                    </div>
                </div>
            </div>
            {fakeCryptoTable.map((crypto, idx) => (
                <Link to={`/crypto/${crypto.ticker}`} key={idx} className="w-full flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center border-b dark:border-white dark:border-opacity-30 px-4 lg:px-8 py-4 hover:bg-secondary-btn-hover dark:hover:bg-bg-dark-hover transition-all cursor-pointer">
                    <div className="flex items-center justify-between w-full lg:w-auto">
                        <div className="flex items-center gap-2 lg:w-[200px] overflow-hidden">
                            <div className="min-w-[3.5rem] min-h-[3.5rem] w-14 h-14 p-1 dark:bg-[#eee] rounded-md">
                                <img src={crypto.logo} alt={crypto.name} className="w-full h-full object-cover rounded-full" />
                            </div>
                            <div className="flex flex-col items-start justify-between gap-2">
                                <div className="flex gap-2 items-center text-gray-300 text-sm">
                                    <span>{crypto.ticker}</span>
                                </div>
                                <h2>{crypto.name}</h2>
                            </div>
                        </div>
                        <div className="block lg:hidden text-center text-primary-clr text-lg">
                            <i className={`${crypto.addedToWatchList ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                        </div>
                    </div>
                    <div className="w-full flex items-center lg:flex-[10]">
                        <div className="flex-2 text-left lg:flex-[3] lg:text-center">
                            {formatCash(crypto.price, undefined, "$")}
                        </div>
                        <div className="flex-[3] text-center hidden sm:block">
                            {formatCash(crypto.marketcap, "nonDecimal", "$")}
                        </div>
                        <div className="flex-[3] text-center hidden xl:block">
                            {formatCash(crypto.volume24h, "nonDecimal", "$")}
                        </div>
                        <div className="flex items-center justify-center flex-2">
                            {percentageBubble(crypto.priceOver7days)}
                        </div>
                        <div className="flex items-center justify-end lg:justify-center flex-2">
                            {percentageBubble(crypto.priceOver1Year)}
                        </div>
                    </div>
                    <div className="hidden lg:block text-center text-primary-clr text-lg flex-1">
                        <i className={`${crypto.addedToWatchList ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                    </div>
                </Link>
            ))}
            {/* <div className="flex flex-col">
                <CryptoDesktobTable gridTemplateColumnsClasses={gridTemplateColumnsClasses} />
                <CryptoMobileTable />
            </div> */}
        </section >
    );
}

export default CryptosTable;
