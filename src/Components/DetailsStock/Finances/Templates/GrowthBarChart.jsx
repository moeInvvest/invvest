import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

function GrowthBarChart({ labels, dataset1, dataset2, title }) {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        setChartData({
            labels,
            datasets: [
                {
                    label: dataset1.title,
                    data: dataset1.data,
                    backgroundColor: (ctx) => {
                        const value = ctx.dataset.data[ctx.dataIndex];
                        return value >= 0 ? '#4DA343' : '#F6091A';
                    },
                    borderRadius: 5,
                    borderColor: (ctx) => {
                        const value = ctx.dataset.data[ctx.dataIndex];
                        return value >= 0 ? '#4DA343' : '#F6091A';
                    },
                    borderWidth: 0
                },
                {
                    label: dataset2.title,
                    data: dataset2.data,
                    backgroundColor: (ctx) => {
                        const value = ctx.dataset.data[ctx.dataIndex];
                        return value >= 0 ? '#67BC5D' : '#FF2E00';
                    },
                    borderRadius: 5,
                    borderColor: (ctx) => {
                        const value = ctx.dataset.data[ctx.dataIndex];
                        return value >= 0 ? '#67BC5D' : '#FF2E00';
                    },
                    borderWidth: 0
                }
            ]
        })
    }, []);

    const options = {
        responsive: true,
        animation: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            y: {
                display: false,
                beginAtZero: true
            },
            x: {
                grid: { display: false },
                ticks: { color: "rgb(156 163 175)" }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (value) => `${value.dataset.label} : ${value.formattedValue} %`,
                }
            }
        }
    };

    if (!chartData.labels) return <div>...</div>
    return (
        <div className="flex-1 flex flex-col items-start-gap-4 w-full">
            <h2 className="text-md capitalize">{title}</h2>
            <div className="h-60 w-full">
                <Bar data={chartData} options={options} className="w-full max-w-full" />
            </div>
        </div>
    );
}

export default GrowthBarChart;
