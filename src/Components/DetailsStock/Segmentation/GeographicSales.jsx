import { useContext, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { ThemeContext } from "../../../Contexts/ThemeContext";

function GeographicSales({ stock }) {
    const [chartData, setChartData] = useState([]);
    const { globalTheme } = useContext(ThemeContext);
    const totalRevenue = stock.geographicalRevenue.reduce((acc, country) => acc + country.value, 0);

    useEffect(() => {
        stock.geographicalRevenue = stock.geographicalRevenue.sort((a, b) => b.value - a.value);
        setChartData({
            labels: stock.geographicalRevenue.map(country => country.label),
            datasets: [
                {
                    label: "Revenue",
                    data: stock.geographicalRevenue.map(country => country.value),
                    backgroundColor: "#25A7C8",
                    borderRadius: 5,
                    borderWidth: 0
                }
            ]
        })
    }, []);

    const plug = {
        afterDatasetsDraw: function (chart) {
            const ctx = chart.ctx;
            ctx.fillStyle = globalTheme === "dark" ? "#eee" : "#333";
            ctx.textBaseline = 'top';
            ctx.font = "bold 16px graphik";

            chart.data.datasets.forEach(function (dataset, i) {
                const meta = chart.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                    const data = dataset.data[index];
                    let label = chartData.labels[index];
                    const labelWidth = ctx.measureText(label).width;
                    if (labelWidth > bar.width * 75 / 100) {
                        label = `${label.substring(0, 4)}...`;
                    } else {
                        label = label
                    }
                    ctx.fillText((data * 100 / totalRevenue).toFixed(2) + " %", bar.x + 6, bar.y - 7);
                    ctx.fillText(label, 6, bar.y - 5);
                });
            });
        }
    }

    const options = {
        indexAxis: 'y',
        layout: {
            padding: {
                right: 60
            },
        },
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                displayColors: false,
                padding: 20,
                bodyFont: {
                    size: 16,
                    weight: "bold"
                },
                callbacks: {
                    title: () => "",
                    label: function (tooltipItem) {
                        const index = tooltipItem.dataIndex;
                        return tooltipItem.label;
                    }
                },
            },
        },
        scales: {
            y: {
                display: false,
                ticks: { color: "#eee" },
                grid: { color: "rgba(238,238,238,0.2)" }
            },
            x: {
                display: false,
                ticks: { color: "#eee" },
                grid: { display: false, },
            }
        },
    };

    if (!chartData.labels) return <div>...</div>
    return (
        <div className="flex flex-col gap-4 flex-2">
            <h2 className="text-md">Par geographie</h2>
            <div className="h-60 border-l border-gray-400">
                <Bar data={chartData} options={options} plugins={[plug]} className="max-w-full" />
            </div>
        </div>
    );
}

export default GeographicSales;
