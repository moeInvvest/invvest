import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { formatCash, formatCashShorthand, formatFrenchNumber } from "../../../../Utils";

function RegularBarChart({ labels, dataset1, dataset2, typeOfData, title }) {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        setChartData({
            labels,
            datasets: dataset2 ? [
                {
                    label: dataset1.title,
                    data: dataset1.data,
                    // backgroundColor: "#25A7C8",
                    backgroundColor: "#6B6699",
                    borderRadius: 5,
                    borderWidth: 0
                },
                {
                    label: dataset2.title,
                    data: dataset2.data,
                    // backgroundColor: "#F8AF27",
                    backgroundColor: "#A7A3C2",
                    borderRadius: 5,
                    borderWidth: 0
                }
            ] :
                [
                    {
                        label: dataset1.title,
                        data: dataset1.data,
                        // backgroundColor: "#25A7C8",
                        backgroundColor: "#6B6699",
                        borderRadius: 5,
                        borderWidth: 0
                    }
                ]
        })
    }, []);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (value) => {
                        if (typeOfData === "shorthandPrice") {
                            return `${value.dataset.label} : ${formatCashShorthand(Number(value.formattedValue.split(",").join("")), "$")}`
                        } else if (typeOfData === "price") {
                            return `${value.dataset.label} : ${formatCash(Number(value.formattedValue.split(",").join("")), undefined, "$")}`
                        } else if (typeOfData === "number") {
                            return `${value.dataset.label} : ${formatFrenchNumber(Number(value.formattedValue.split(",").join("")))}`
                        } else if (typeOfData === "percentage") {
                            return `${value.dataset.label} : ${Number(value.formattedValue.split(",").join(""))} %`
                        }
                    },
                }
            }
        },
        scales: {
            y: { display: false },
            x: {
                display: true,
                ticks: { color: "rgb(156 163 175)" },
                grid: { display: false },
            }
        },
    };

    if (!chartData.labels) return <div>...</div>
    return (
        <div className="flex-1 flex flex-col items-start-gap-4 w-full">
            <h2 className="text-md capitalize">{title}</h2>
            <div className="h-60 w-full">
                <Bar data={chartData} options={options} className="max-w-full" />
            </div>
        </div>
    );
}

export default RegularBarChart;
