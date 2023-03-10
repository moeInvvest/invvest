import { BlueHeroBanner, ScreenerFilter, ScreenerHeader, StocksTable } from "../Components";
import { FILTERS_ENUMS } from "../Constants";

function ScreenerStocks() {
    const heading = {
        title: "Screener Actions",
        paragraph: "Trouvez votre prochaine pépite parmi plus de 70 000 actions et accédez à toutes ses informations financières."
    };

    const headerData = [
        {
            heading: "Top 30j",
            goto: "/trends-stock?trendBy=top",
            datas: [
                {
                    icon: "https://eodhistoricaldata.com/img/logos/PA/tte.png",
                    name: "TotalEnergie",
                    percentage: 20,
                    ticker: "TTE"
                },
                {
                    icon: "https://eodhistoricaldata.com/img/logos/US/aapl.png",
                    name: "Apple Inc",
                    percentage: 12,
                    ticker: "AAPL"
                },
                {
                    icon: "https://eodhistoricaldata.com/img/logos/US/ko.png",
                    name: "Coca-Cola Co",
                    percentage: 3,
                    ticker: "KO"
                }
            ]
        },
        {
            heading: "Flop 30j",
            goto: "/trends-stock?trendBy=flop",
            datas: [
                {
                    icon: "https://eodhistoricaldata.com/img/logos/US/t.png",
                    name: "AT&T Inc",
                    percentage: -200,
                    ticker: "T"
                },
                {
                    icon: "https://eodhistoricaldata.com/img/logos/US/PG.png",
                    name: "Procter & Gamble Company",
                    percentage: -11,
                    ticker: "PG"
                },
                {
                    icon: "https://eodhistoricaldata.com/img/logos/PA/SAN.png",
                    name: "Sanofi SA",
                    percentage: -5,
                    ticker: "SAN"
                },
            ]
        },
        {
            heading: "Populaire sur Invvest",
            goto: "/trends-stock?trendBy=popular",
            datas: [
                {
                    icon: "https://eodhistoricaldata.com/img/logos/US/SBUX.png",
                    name: "Starbucks Corporation",
                    percentage: -120000,
                    ticker: "SBUX"
                },
                {
                    icon: "https://eodhistoricaldata.com/img/logos/US/amt.png",
                    name: "American Tower Corp",
                    percentage: 50,
                    ticker: "AMT"
                },
                {
                    icon: "https://eodhistoricaldata.com/img/logos/US/pep.png",
                    name: "PepsiCo Inc",
                    percentage: 1,
                    ticker: "PEP"
                },
            ]
        },
    ];

    const sortByOptions = [
        "Capitalisation", "Popularité", "Performance 1 an"
    ];

    const filters = [
        {
            type: FILTERS_ENUMS.SELECTOR,
            filterBy: "Pays",
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
            filterBy: "Secteur",
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
            type: FILTERS_ENUMS.SLIDER,
            filterBy: "PER",
        },
        {
            type: FILTERS_ENUMS.SLIDER,
            filterBy: "Rendement",
        },
        {
            type: FILTERS_ENUMS.SLIDER,
            filterBy: "Dividende sans interruption",
        },
        {
            type: FILTERS_ENUMS.SLIDER,
            filterBy: "Croissance dividende",
            proOnly: true
        },
        {
            type: FILTERS_ENUMS.SLIDER,
            filterBy: "Score de sureté du dividende",
            proOnly: true
        },
        {
            type: FILTERS_ENUMS.SLIDER,
            filterBy: "Score de croissance",
            proOnly: true
        },
        {
            type: FILTERS_ENUMS.SELECTOR,
            filterBy: "Score ESG",
            proOnly: true,
            options: [
                { score: "AAA", value: "aaa" },
                { score: "AA", value: "aa" },
                { score: "A", value: "a" },
                { score: "BBB", value: "bbb" },
                { score: "BB", value: "bb" },
                { score: "B", value: "b" },
                { score: "C", value: "c" },
            ]
        },
        {
            type: FILTERS_ENUMS.SELECTOR,
            filterBy: "Fréquence du dividende",
            proOnly: true,
            options: [
                { frequence: "Mensuel (x12)", value: "" },
                { frequence: "Trimestriel (x4)", value: "" },
                { frequence: "Semestriel (x2)", value: "" },
                { frequence: "Annuel (x1)", value: "" }
            ]
        },
        {
            type: FILTERS_ENUMS.SELECTOR,
            filterBy: "Volatilité",
            proOnly: true,
            options: [
                { volatility: "Peu volatile (bêta < 1)", value: "" },
                { volatility: "Normal (bêta = 1)", value: "" },
                { volatility: "Volatile (bêta 1 - 2)", value: "" },
                { volatility: "Très volatile (bêta > 2)", value: "" }
            ]
        },
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
                placeholder="Rechercher une action"
                filters={filters}
                breakpoints={swiperBreakpoints} />
            <StocksTable />
        </BlueHeroBanner>
    );
};

export default ScreenerStocks;
