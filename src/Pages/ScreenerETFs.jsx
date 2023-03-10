import React from "react";
import { BlueHeroBanner, ETFsTable, ScreenerFilter, ScreenerHeader } from "../Components";
import { FILTERS_ENUMS } from "../Constants";

function ScreenerETFs() {
    const heading = {
        title: "Screener ETFs",
        paragraph: "Trouvez votre prochain investissement passif parmi plus de 9 000 ETFs et accédez à toutes ses informations financières."
    };

    const headerData = [
        {
            heading: "Top 30j",
            goto: "/trends-etf?trendBy=top",
            datas: [
                {
                    icon: "https://cdn.moning.co/logos/lyxor.png",
                    name: "Lyxor MSCI China UCITS ETF - Acc CHF",
                    percentage: 12,
                    ticker: "LCCN"
                },
                {
                    icon: "https://cdn.moning.co/logos/amundi.png",
                    name: "Amundi Index Solutions - Amundi MSCI China UCITS ETF-C EUR",
                    percentage: 0,
                    ticker: "CC1"
                },
                {
                    icon: "https://cdn.moning.co/logos/ishares.png",
                    name: "iShares Core MSCI EAFE IMI Index ETF (CAD-Hedged)",
                    percentage: 4,
                    ticker: "XFH"
                }
            ]
        },
        {
            heading: "Flop 30j",
            goto: "/trends-etf?trendBy=flop",
            datas: [
                {
                    icon: "https://cdn.moning.co/logos/vanguard.png",
                    name: "Vanguard Total Stock Market Index Fund ETF Shares",
                    percentage: -7,
                    ticker: "VTI"
                },
                {
                    icon: "https://cdn.moning.co/logos/etf.png",
                    name: "SPDR S&P 500 ETF Trust",
                    percentage: -6,
                    ticker: "SPY"
                },
                {
                    icon: "https://cdn.moning.co/logos/ishares.png",
                    name: "SPDR S&P 500 ETF Trust",
                    percentage: -6,
                    ticker: "IVV"
                },
            ]
        },
        {
            heading: "Populaire sur Invvest",
            goto: "/trends-etf?trendBy=popular",
            datas: [
                {
                    icon: "https://companieslogo.com/img/orig/allianz-im-a6354ff6.png?t=1665725212",
                    name: "ETFs with AIM ImmunoTech Inc.",
                    percentage: 25,
                    ticker: "AIM"
                },
                {
                    icon: "https://cdn.moning.co/logos/vanguard.png",
                    name: "Vanguard FTSE Developed Markets Index Fund ETF Shares",
                    percentage: 10,
                    ticker: "VEA"
                },
                {
                    icon: "https://cdn.moning.co/logos/etf.png",
                    name: "Xtrackers Nikkei 225 UCITS ETF 1D",
                    percentage: -1,
                    ticker: "XDJP"
                }
            ]
        },
    ];

    const sortByOptions = [
        "Taille du fond", "Popularité", "Performance 1 an"
    ];

    const filters = [
        {
            type: FILTERS_ENUMS.SELECTOR,
            filterBy: "Classe d'actifs",
            options: [
                { country: "États-Unis", value: "US" },
                { country: "Belgique", value: "BE" },
                { country: "Canada", value: "CA" },
                { country: "France", value: "FR" },
                { country: "Allemagne", value: "DE" },
                { country: "Espagne", value: "ES" },
                { country: "Italie", value: "IT" },
                { country: "Portugal", value: "PT" },
                { country: "Pays-bas", value: "NL" },
                { country: "Swisse", value: "CH" },
                { country: "Royaume-unis", value: "UK" },
                { country: "Norvège", value: "NO" },
                { country: "Suède", value: "SE" },
                { country: "Finlande", value: "FE" }
            ]
        },
        {
            type: FILTERS_ENUMS.SELECTOR,
            filterBy: "Exposition",
            options: [
                { sector: "Finance", value: "financials" },
                { sector: "Immobilier", value: "real_estate" },
                { sector: "Santé", value: "healthcare" },
                { sector: "Energie", value: "energy" },
                { sector: "Utilitaires", value: "utilities" },
                { sector: "Consommation de base", value: "consumer_staples" },
                { sector: "Communications", value: "communications" },
                { sector: "Industrie", value: "industrials" },
                { sector: "Cosommation discretionnaire", value: "consumer_discretionary" },
                { sector: "Technologie", value: "information_technology" },
                { sector: "Matériaux", value: "materials" },
                { sector: "Autre", value: "others" }
            ]
        },
        {
            type: FILTERS_ENUMS.SLIDER,
            filterBy: "Rendement",
        },
        {
            type: FILTERS_ENUMS.SELECTOR,
            filterBy: "Eligibilité",
        },
        {
            type: FILTERS_ENUMS.SELECTOR,
            filterBy: "Distribution",
        },
        {
            type: FILTERS_ENUMS.SLIDER,
            filterBy: "Taille du fonds",
            proOnly: true
        },
        {
            type: FILTERS_ENUMS.SELECTOR,
            filterBy: "Score ESG",
            proOnly: true
        },
        {
            type: FILTERS_ENUMS.SLIDER,
            filterBy: "Frais",
            proOnly: true
        }
    ];

    const swiperBreakpoints = {
        300: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        900: { slidesPerView: "auto" },
        1100: { slidesPerView: filters.length > 8 ? "auto" : 4 },
    }

    return (
        <BlueHeroBanner heading={heading}>
            <ScreenerHeader headerData={headerData} />
            <ScreenerFilter
                sortByOptions={sortByOptions}
                placeholder="Rechercher un ETF"
                filters={filters}
                breakpoints={swiperBreakpoints} />
            <ETFsTable />
        </BlueHeroBanner>
    );
};

export default ScreenerETFs;
