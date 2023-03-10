import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BlueHeroBanner } from "../Components";
import styles from "../Styles";
import { formatCash, formatFrenchNumber, percentageBubble } from "../Utils";

const top = [
    {
        logo: "https://cdn.moning.co/logos/lyxor.png",
        name: "Lyxor MSCI China UCITS ETF - Acc CHF",
        ticker: "LCCN",
        country: "France",
        sector: "Énergie",

        marketcap: 145125475321.51,
        price: 59.35,
        priceOver1Month: 9,
        YTD: 5,
        priceOver1Year: 22,
        addedToWatchList: true,
    },
    {
        logo: "https://cdn.moning.co/logos/etf.png",
        name: "SPDR S&P 500 ETF Trust",
        ticker: "SPY",
        country: "US",
        sector: "Technologie",

        marketcap: 2342458796213.51,
        price: 151,
        priceOver1Month: 15,
        YTD: 2,
        priceOver1Year: 26,
        addedToWatchList: false,
    },
    {
        logo: "https://companieslogo.com/img/orig/allianz-im-a6354ff6.png?t=1665725212",
        name: "ETFs with AIM ImmunoTech Inc.",
        ticker: "AIM",
        country: "US",
        sector: "Immobilier",

        marketcap: 28796213.51,
        price: 66.85,
        priceOver1Month: -1,
        YTD: -8,
        priceOver1Year: 14,
        addedToWatchList: false,
    },
];

const flop = [
    {
        logo: "https://cdn.moning.co/logos/etf.png",
        name: "SPDR S&P 500 ETF Trust",
        ticker: "SPY",
        country: "US",
        sector: "Technologie",

        marketcap: 2342458796213.51,
        price: 151,
        priceOver1Month: 15,
        YTD: 2,
        priceOver1Year: 26,
        addedToWatchList: false,
    },
    {
        logo: "https://companieslogo.com/img/orig/allianz-im-a6354ff6.png?t=1665725212",
        name: "ETFs with AIM ImmunoTech Inc.",
        ticker: "O",
        country: "US",
        sector: "Immobilier",

        marketcap: 28796213.51,
        price: 66.85,
        priceOver1Month: -1,
        YTD: -8,
        priceOver1Year: 14,
        addedToWatchList: false,
    },
    {
        logo: "https://cdn.moning.co/logos/lyxor.png",
        name: "Lyxor MSCI China UCITS ETF - Acc CHF",
        ticker: "LCCN",
        country: "France",
        sector: "Énergie",

        marketcap: 145125475321.51,
        price: 59.35,
        priceOver1Month: 9,
        YTD: 5,
        priceOver1Year: 22,
        addedToWatchList: true,
    },
];

const popular = [
    {
        logo: "https://cdn.moning.co/logos/vanguard.png",
        name: "Vanguard FTSE Developed Markets Index Fund ETF Shares",
        ticker: "VEA",
        country: "US",
        sector: "Technologie",

        price: 151,
        investors: 9190,
        sharesHeld: 36054,
        totalValue: 304656300,
        priceOver1Year: 21,
        addedToWatchList: true,
    },
    {
        logo: "https://cdn.moning.co/logos/lyxor.png",
        name: "Lyxor MSCI China UCITS ETF - Acc CHF",
        ticker: "LCCN",
        country: "France",
        sector: "Énergie",

        price: 59.35,
        investors: 1451,
        sharesHeld: 8450,
        totalValue: 12260950,
        priceOver1Year: 26,
        addedToWatchList: true,
    },
    {
        logo: "https://cdn.moning.co/logos/amundi.png",
        name: "Amundi Index Solutions - Amundi MSCI China UCITS ETF-C EUR",
        ticker: "CC1",
        country: "US",
        sector: "Immobilier",


        price: 66.85,
        investors: 1254,
        sharesHeld: 1052,
        totalValue: 1319208,
        priceOver1Year: 22,
        addedToWatchList: true,
    },
];

const heading = {
    title: "Trending ETFs",
    paragraph: "Restez à l'affût de ce qui bouge en ce moment et les ETF les plus détenus par les investisseurs sur Invvest."
};

const trendByOptions = [
    { value: "top", label: "Top 1M" },
    { value: "flop", label: "Flop 1M" },
    { value: "popular", label: "Populaire sur Invvest" }
];

function TrendEtf() {
    const [loading, setLoading] = useState(true);
    const [isFixed, setIsFixed] = useState(false);
    const [theadTopPosition, setTheadTopPosition] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [trendBy, setTrendBy] = useState(searchParams.get('trendBy') || 'top');
    const [trendingData, setTrendingData] = useState(top);

    const theadRef = useRef(null);

    useEffect(() => {
        setTheadTopPosition(theadRef.current?.getBoundingClientRect().top - 10)
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

    function toggleTrendBy(option) {
        setTrendBy(option);
        const searchParamsVar = new URLSearchParams();
        searchParamsVar.set("trendBy", option);
        setSearchParams(searchParamsVar);
    };

    useEffect(() => {
        if (trendBy === "top") {
            setNotTrendingByPopular(true)
            setTrendingData(top);
        } else if (trendBy === "flop") {
            setNotTrendingByPopular(true)
            setTrendingData(flop);
        } else {
            setNotTrendingByPopular(false)
            setTrendingData(popular);
        }
    }, [trendBy]);

    const [notTrendingByPopular, setNotTrendingByPopular] = useState(trendBy !== "popular");

    return (
        <BlueHeroBanner heading={heading}>
            <section className={`py-6 bg-white dark:bg-bg-dark-secondary rounded-2xl xl:rounded-3xl shadow-headerBox dark:shadow-darkHeaderBox sm:mx-4 mt-0 mx-0 relative z-[2]`}>

                <div className="flex items-center gap-4 w-full border-b border-gray-200 dark:border-opacity-20 pb-8 px-4 lg:px-8">
                    {trendByOptions.map(option => (
                        <button
                            key={option.value}
                            className={`py-2 px-4 rounded-xl transition-all whitespace-nowrap ${trendBy === option.value ? "bg-primary-clr text-white shadow-sm" : ""}`}
                            onClick={() => toggleTrendBy(option.value)}>
                            <span className="hidden sm:block">{option.label}</span>
                            <span className="block sm:hidden">{option.label === "Populaire sur Invvest" ? option.label.split(" ")[0] : option.label}</span>
                        </button>
                    ))}
                </div>

                <div className="w-full px-4 lg:px-8">
                    <div className={`py-2 ${isFixed ? `fixed z-10 top-[0] left-0 w-full bg-white dark:bg-bg-dark-secondary shadow-md dark:shadow-white/10` : ""}`}>
                        <div className={`w-full flex justify-between font-bold ${isFixed ? `pb-2 ${styles.boxWidth} w-full px-8 lg:px-12` : ""}`} ref={theadRef}>
                            {notTrendingByPopular ?
                                <>
                                    <div className="text-left hidden lg:block" style={{ width: "314px" }}>Nom</div>
                                    <div className="w-full flex lg:flex-[10]">
                                        <div className="text-left lg:text-center flex-2">Prix</div>
                                        <div className="hidden lg:block text-center flex-[3]">Actifs sous gestion</div>
                                        <div className="text-center flex-2">1M</div>
                                        <div className="text-center flex-2">YTD</div>
                                        <div className="text-center flex-2">1A</div>
                                    </div>
                                    <div className="text-center flex-1"></div>
                                </>
                                :
                                <>
                                    <div className="text-left hidden lg:block" style={{ width: "314px" }}>Nom</div>
                                    <div className="w-full flex lg:flex-[10]">
                                        <div className="hidden lg:block text-left lg:text-center flex-2">Prix</div>
                                        <div className="text-left lg:text-center flex-2">Investisseurs</div>
                                        <div className="text-center flex-[3]">Parts détenues</div>
                                        <div className="hidden sm:block text-center flex-[3]">Valeur total</div>
                                        <div className="hidden lg:block text-center flex-2">1A</div>
                                    </div>
                                    <div className="text-center flex-1"></div>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <section className="w-full">
                    {trendingData.length > 0 && trendingData.map((stock, i) => (
                        <Link to={`/stock/${stock.ticker}`} key={i} className={`w-full flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center border-b dark:border-white dark:border-opacity-30 px-4 lg:px-8 py-4 hover:bg-secondary-btn-hover dark:hover:bg-bg-dark-hover transition-all cursor-pointer`}>
                            <div className="w-full lg:w-[314px] flex justify-between items-center">
                                <div className="flex items-center gap-2" style={{ width: "314px" }}>
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
                                <div className="block lg:hidden text-primary-clr text-lg flex-1 text-right">
                                    <i className={`${stock.addedToWatchList ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                                </div>
                            </div>
                            <div className="w-full flex lg:flex-[10]">
                                <div className={`flex items-center text-left lg:text-center flex-2 ${notTrendingByPopular ? "lg:block" : "hidden lg:block"}`}>
                                    {formatCash(stock.price, undefined, "$")}
                                </div>
                                <div className={`text-left lg:text-center ${notTrendingByPopular ? "flex-[3] hidden lg:block" : "flex-2"}`}>
                                    {notTrendingByPopular ? formatCash(stock.marketcap, "nonDecimal", "$") : formatFrenchNumber(stock.investors)}
                                </div>
                                <div className={`flex items-center justify-center  ${notTrendingByPopular ? "flex-2" : "flex-[3]"}`}>
                                    {notTrendingByPopular ? percentageBubble(stock.priceOver1Month) : formatFrenchNumber(stock.sharesHeld)}
                                </div>
                                <div className={`flex items-center justify-center  ${notTrendingByPopular ? "flex-2" : "flex-[3] hidden sm:flex"}`}>
                                    {notTrendingByPopular ? percentageBubble(stock.YTD) : formatCash(stock.totalValue, "nonDecimal", "$")}
                                </div>
                                <div className={`flex-2 flex items-center justify-center ${notTrendingByPopular ? "" : "hidden lg:flex"}`}>
                                    {percentageBubble(stock.priceOver1Year)}
                                </div>
                            </div>
                            <div className="hidden lg:block text-center text-primary-clr text-lg flex-1">
                                <i className={`${stock.addedToWatchList ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                            </div>
                        </Link>
                    ))}
                </section>
            </section>
        </BlueHeroBanner>
    );
};

export default TrendEtf;
