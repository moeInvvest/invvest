import React from "react";
import styles from "../../Styles";
import OneRecentlyViewedArticle from "./OneRecentlyViewedArticle";

function RecentlyView() {
    const arr1 = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
    const arr2 = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
    const arr3 = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
    const arr4 = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));

    const viewedRecently = [
        {
            name: "Invesco QQQ ETF",
            price: 291,
            chartData: arr1
        },
        {
            name: "Vanguard Value ETF",
            price: 452,
            chartData: arr2
        },
        {
            name: "Lyxor Core MSCI Japan UCITS ETF",
            price: 12,
            chartData: arr3
        },
        {
            name: "iShares Core MSCI EAFE ETF",
            price: 65,
            chartData: arr4
        }
    ];

    return (
        <section className="mx-4 py-6 mt-4">
            <h2 className={`${styles.heading} mb-4 text-2xl`}>Vu récemment</h2>
            <div className="w-full overflow-x-scroll scrollbar-hidden p-2">
                <div className="grid grid-cols-4 gap-8 justify-between min-w-[1248px]">
                    {viewedRecently.map((article, i) => (
                        <OneRecentlyViewedArticle key={article.name} article={article} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RecentlyView;
