import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import { Link } from "react-router-dom";
import { formatCash } from "../../Utils";

function OneRecentlyViewedArticle({ article }) {
    const [data, setData] = useState([]);
    const articleData = article.chartData;
    const isPositive = articleData[0] - articleData.at(-1) < 0;

    useEffect(() => {
        setData({
            labels: article.chartData.map((data, i) => i),
            datasets: [
                {
                    label: "",
                    data: article.chartData?.map(data => data),
                    backgroundColor: (context) => {
                        const ctx = context.chart.ctx;
                        const gradient = ctx.createLinearGradient(0, 0, 0, 150);
                        // gradient.addColorStop(0, portfolio.percentage > 0 ? "rgba(0, 0, 250, 0.2)" : `${isDark ? "rgba(252, 0, 0, 0.2)" : "rgba(252, 227, 227,1)"}`);
                        // gradient.addColorStop(1, portfolio.percentage > 0 ? "rgba(249, 252, 254, 0)" : `${isDark ? "rgba(252, 0, 0, 0)" : "rgba(252, 249, 249, 0)"}`);
                        gradient.addColorStop(0, isPositive ? "rgba(6, 196, 47, 0.1)" : "rgba(252, 0, 0, 0.1)");
                        gradient.addColorStop(1, isPositive ? "rgba(6, 196, 47, 0.01)" : "rgba(252, 0, 0, 0)");
                        return gradient;
                    },
                    borderColor: isPositive > 0 ? "#06c42f" : "red",
                    borderWidth: 1,
                    fill: true,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    tension: 0.3,
                }
            ]
        });
    }, []);

    const options = {
        maintainAspectRatio: false,
        scales: {
            x: { display: false, },
            y: { display: false, beginAtZero: true }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        }
    }
    // shadow-headerBox dark:shadow-darkHeaderBox
    //  shadow-headerBox dark:shadow-darkHeaderBox
    return (
        <Link to={`/article/${article.name}`} className="flex flex-col items-center rounded-3xl bg-white  dark:bg-bg-dark-secondary overflow-hidden shadow-md dark:shadow-white/10">
            <div className="flex flex-col items-center w-full py-2 px-4">
                <h2>{article.name}</h2>
                <h3 className="font-bold">{formatCash(article.price)}</h3>
            </div>
            <>
                {data.labels ?
                    <div className="h-32 w-full overflow-hidden">
                        <Line data={data} options={options} />
                    </div>
                    : "loading...."
                }
            </>
        </Link>
    );
}

export default OneRecentlyViewedArticle;
