import React from "react";
import { BlueHeroBanner, ScreenerFilter } from "../Components";
import { fakePublicPortfolios } from "../Components/PublicPortfolios/fakePublicPortfolios";
import SinglePublicPortfolio from "../Components/PublicPortfolios/SinglePublicPortfolio";
import { FILTERS_ENUMS } from "../Constants";

function PublicPortfolios() {
    const heading = {
        title: "Portefeuilles publics",
        paragraph: "En manque d'inspiration ? Explorez parmi des centaines de portefeuilles publics d'investisseurs comme vous."
    };

    const sortByOptions = ["Performance", "Popularité", "Valeur"];

    const filters = [
        {
            type: FILTERS_ENUMS.SLIDER,
            filterBy: "Performance annualisée",
        },
        {
            type: FILTERS_ENUMS.SLIDER,
            filterBy: "Rendement",
        },
        {
            type: FILTERS_ENUMS.SLIDER,
            filterBy: "Valeur",
        },
        {
            type: FILTERS_ENUMS.SELECTOR,
            filterBy: "Nombre de positions",
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
            filterBy: "Concentration sectorielle (+ 30%)",
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
    ];

    const swiperBreakpoints = {
        300: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        900: { slidesPerView: 4 },
    };

    return (
        <BlueHeroBanner heading={heading}>
            <div>
                <ScreenerFilter
                    sortByOptions={sortByOptions}
                    placeholder="Rechercher un portefeuille, un investisseur..."
                    filters={filters}
                    breakpoints={swiperBreakpoints}
                    fixedAlone={true}
                />
                <section className="mt-8 mx-0 sm:mx-4 py-6 px-0 sm:px-8 grid grid-cols-1 tableBrkpt:grid-cols-2 xl:grid-cols-3 gap-8 justify-between">
                    {fakePublicPortfolios.map((portfolio, idx) => (
                        <SinglePublicPortfolio key={idx} portfolio={portfolio} />
                    ))}
                </section>
            </div>
        </BlueHeroBanner>
    );
};

export default PublicPortfolios;
