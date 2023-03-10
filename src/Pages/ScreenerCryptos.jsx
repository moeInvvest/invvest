import React from "react";
import { BlueHeroBanner, ScreenerFilter, ScreenerHeader } from "../Components";
import CryptosTable from "../Components/ScreenerCrypto/CryptosTable";
import { FILTERS_ENUMS } from "../Constants";

function ScreenerCryptos() {
    const heading = {
        title: "Screener Cryptos",
        paragraph: 'Trouvez votre prochaine "to ze moon" parmi plus de 2 000 cryptomonnaies et accédez à toutes ses données financières.'
    };

    const headerData = [
        {
            heading: "Top 30j",
            goto: "/trends-crypto?trendBy=top",
            datas: [
                {
                    icon: "https://cdn.moning.co/logos/UNISWAP-USD.CC.png",
                    name: "Uniswap",
                    percentage: 142,
                    ticker: "UNISWAP"
                },
                {
                    icon: "https://cdn.moning.co/logos/OKB-USD.CC.png",
                    name: "OKB",
                    percentage: 95,
                    ticker: "okb"
                },
                {
                    icon: "https://cdn.moning.co/logos/LDO-USD.CC.png",
                    name: "Lido DAO",
                    percentage: 44,
                    ticker: "lido-dao"
                }
            ]
        },
        {
            heading: "Flop 30j",
            goto: "/trends-crypto?trendBy=flop",
            datas: [
                {
                    icon: "https://cdn.moning.co/logos/HEX-USD.CC.png",
                    name: "HEX",
                    percentage: -75,
                    ticker: "hex"
                },
                {
                    icon: "https://cdn.moning.co/logos/ETH-USD.CC.png",
                    name: "Ethereum",
                    percentage: -51,
                    ticker: "ethereum"
                },
                {
                    icon: "https://cdn.moning.co/logos/BTC-USD.CC.png",
                    name: "Bitcoin",
                    percentage: -50,
                    ticker: "bitcoin"
                }
            ]
        },
        {
            heading: "Populaire sur Invvest",
            goto: "/trends-crypto?trendBy=popular",
            datas: [
                {
                    icon: "https://cdn.moning.co/logos/BTC-USD.CC.png",
                    name: "Bitcoin",
                    percentage: -50,
                    ticker: "bitcoin"
                },
                {
                    icon: "https://cdn.moning.co/logos/DOGE-USD.CC.png",
                    name: "Dogecoin",
                    percentage: -45,
                    ticker: "dogecoin"
                },
                {
                    icon: "https://cdn.moning.co/logos/UNISWAP-USD.CC.png",
                    name: "Uniswap",
                    percentage: 142,
                    ticker: "UNISWAP-USD"
                }
            ]
        },
    ];

    const sortByOptions = [
        "Capitalisation", "Popularité", "Performance 1 mois"
    ];

    const filters = [
        {
            type: FILTERS_ENUMS.SELECTOR,
            filterBy: "Capitalisation",
            options: [
                { capitalisation: "Nano (< 50 mln)", value: "nano" },
                { capitalisation: "Micro (50 - 300 mln)", value: "micro" },
                { capitalisation: "Small (300 mln - 2 mds)", value: "small" },
                { capitalisation: "Medium (2 - 10 mds)", value: "medium" },
                { capitalisation: "Large (10 - 200 mds)", value: "large" },
                { capitalisation: "Mega (> 200 mds)", value: "mega" }
            ]
        },
        {
            type: FILTERS_ENUMS.SELECTOR,
            filterBy: "Catégorie",
            options: [
                { category: "Finance", value: "financials" },
                { category: "Immobilier", value: "real_estate" },
                { category: "Santé", value: "healthcare" },
                { category: "Energie", value: "energy" },
                { category: "Utilitaires", value: "utilities" },
                { category: "Consommation de base", value: "consumer_staples" },
                { category: "Communications", value: "communications" },
                { category: "Industrie", value: "industrials" },
                { category: "Cosommation discretionnaire", value: "consumer_discretionary" },
                { category: "Technologie", value: "information_technology" },
                { category: "Matériaux", value: "materials" },
                { category: "Autre", value: "others" }
            ]
        },
        {
            type: FILTERS_ENUMS.SLIDER,
            filterBy: "Algorithme",
        },
        {
            type: FILTERS_ENUMS.SLIDER,
            filterBy: "Platforme",
        },
    ];

    const swiperBreakpoints = {
        300: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        900: { slidesPerView: 4 },
    }

    return (
        <BlueHeroBanner heading={heading}>
            <ScreenerHeader headerData={headerData} />
            <ScreenerFilter
                sortByOptions={sortByOptions}
                placeholder="Rechercher une crypto"
                filters={filters}
                breakpoints={swiperBreakpoints} />
            <CryptosTable />
        </BlueHeroBanner>
    );
};

export default ScreenerCryptos;
