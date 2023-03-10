import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';

function HeaderChart({ portfolio }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData({
            labels: portfolio.data.map((data, i) => i),
            datasets: [
                {
                    label: "",
                    data: portfolio.data?.map(data => data),
                    backgroundColor: (context) => {
                        const ctx = context.chart.ctx;
                        const gradient = ctx.createLinearGradient(0, 0, 0, 150);
                        // gradient.addColorStop(0, portfolio.percentage > 0 ? "rgba(0, 0, 250, 0.2)" : `${isDark ? "rgba(252, 0, 0, 0.2)" : "rgba(252, 227, 227,1)"}`);
                        // gradient.addColorStop(1, portfolio.percentage > 0 ? "rgba(249, 252, 254, 0)" : `${isDark ? "rgba(252, 0, 0, 0)" : "rgba(252, 249, 249, 0)"}`);
                        gradient.addColorStop(0, portfolio.percentage > 0 ? "rgba(0, 0, 250, 0.2)" : "rgba(252, 0, 0, 0.1)");
                        gradient.addColorStop(1, portfolio.percentage > 0 ? "rgba(249, 252, 254, 0)" : "rgba(252, 0, 0, 0)");
                        return gradient;
                    },
                    borderColor: portfolio.percentage > 0 ? "#085BFC" : "red",
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

    return (
        <>
            {data.labels ?
                <Line data={data} options={options} />
                : "loading...."
            }
        </>
    );
}

export default HeaderChart;
