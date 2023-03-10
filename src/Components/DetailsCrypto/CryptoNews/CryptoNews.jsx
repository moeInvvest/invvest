import React from "react";
import styles from "../../../Styles";
import { formatFrenchDate } from "../../../Utils";

// publishedDate
// title
// image
// url

function CryptoNews({ crypto }) {
    return (
        <section className={`${styles.section} pb-8`}>
            <h2 className={`${styles.heading} text-2xl mb-8`}>Dernières actualités</h2>
            <div className="w-full overflow-x-scroll pb-4 styled-scrollbar p-2">
                <section className="flex gap-10 items-start min-w-[1248px]">
                    {crypto.news.map((news, i) => (
                        <a href={news.url} target="_blank" key={i} className="w-full flex flex-col items-start gap-4">
                            <div className="h-32 w-full">
                                <img src={news.image} alt={news.title} className="h-full w-full object-cover rounded-xl" />
                            </div>
                            <p className="text-gray-400">{formatFrenchDate(new Date(news.publishedDate))}</p>
                            <div className="full flex flex-col justify-between items-start w-full gap-2">
                                <h2 className="font-bold text-lg line-clamp-2">{news.title}</h2>
                                <p className="text-gray-400 line-clamp-2">{news.text}</p>
                            </div>
                        </a>
                    ))}
                </section>
            </div>
        </section>

    );
}

export default CryptoNews;
