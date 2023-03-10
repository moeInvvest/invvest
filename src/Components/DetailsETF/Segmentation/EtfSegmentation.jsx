import { useContext, useEffect, useState } from "react";
import styles from "../../../Styles";
import { Doughnut } from 'react-chartjs-2';
import { ThemeContext } from "../../../Contexts/ThemeContext";

const segmentations = {
    "sectorsList": [
        {
            "industry": "Information Technology",
            "exposure": 27.06
        },
        {
            "industry": "Health Care",
            "exposure": 14.21
        },
        {
            "industry": "Consumer Discretionary",
            "exposure": 11.53
        },
        {
            "industry": "Financials",
            "exposure": 10.9
        },
        {
            "industry": "Communication Services",
            "exposure": 8.41
        },
        {
            "industry": "Industrials",
            "exposure": 7.92
        },
        {
            "industry": "Consumer Staples",
            "exposure": 6.77
        },
        {
            "industry": "Energy",
            "exposure": 4.68
        },
        {
            "industry": "Utilities",
            "exposure": 3.16
        },
        {
            "industry": "Real Estate",
            "exposure": 2.83
        },
        {
            "industry": "Materials",
            "exposure": 2.53
        }
    ],
    "countryList": [
        {
            "country": "États-Unis",
            "exposure": 100
        }
    ],
    "etfHolders": [
        {
            "name": "Apple Inc.",
            "weightPercentage": 6.71
        },
        {
            "name": "Microsoft Corporation",
            "weightPercentage": 5.71
        },
        {
            "name": "Amazon.com Inc.",
            "weightPercentage": 2.54
        },
        {
            "name": "Alphabet Inc. Class A",
            "weightPercentage": 1.67
        },
        {
            "name": "Berkshire Hathaway Inc. Class B",
            "weightPercentage": 1.62
        },
        {
            "name": "NVIDIA Corporation",
            "weightPercentage": 1.6
        },
        {
            "name": "Tesla Inc",
            "weightPercentage": 1.58
        },
        {
            "name": "Alphabet Inc. Class C",
            "weightPercentage": 1.48
        },
        {
            "name": "Exxon Mobil Corporation",
            "weightPercentage": 1.39
        },
        {
            "name": "UnitedHealth Group Incorporated",
            "weightPercentage": 1.33
        },
        {
            "name": "JPMorgan Chase & Co.",
            "weightPercentage": 1.21
        },
        {
            "name": "Autres",
            "weightPercentage": 73.16
        }
    ],
};

function EtfSegmentation({ etf }) {
    const [doghnutChart, setDoghnutChart] = useState([]);
    const [hoveredData, setHoveredData] = useState(null);
    const { globalTheme } = useContext(ThemeContext);
    const backgrounds = ["#25A7C8", "#39BCC2", "#34BAA3", "#31AE75", "#4DA343", "#A2B831", "#DCBE2B", "#F8AF27", "#F8861D", "#E64C2C", "#EA3F4D", `${globalTheme === "dark" ? "#666192" : "lightgray"}`];

    const sectorsNames = segmentations.sectorsList.map(sector => sector.industry);
    const sectorsExposures = segmentations.sectorsList.map(sector => sector.exposure);

    const countriesNames = segmentations.countryList.map(country => country.country);
    const countriesExposures = segmentations.countryList.map(country => country.exposure);

    const etfHoldersNames = segmentations.etfHolders.map(etfHolder => etfHolder.name);
    const etfHoldersExposures = segmentations.etfHolders.map(etfHolder => etfHolder.weightPercentage);

    const segmentationOptions = [
        { label: "Secteurs", value: "Sectors" },
        { label: "Composants", value: "Holders" },
        { label: "Pays", value: "Countries" }
    ];

    const [activeSegmentation, setActiveSegmentation] = useState({
        legend: segmentationOptions[0].value,
        labels: sectorsNames,
        data: sectorsExposures
    });


    useEffect(() => {
        setDoghnutChart({
            labels: activeSegmentation.labels,
            datasets: [
                {
                    label: activeSegmentation.legend,
                    data: activeSegmentation.data,
                    backgroundColor: backgrounds,
                    cutout: "80%",
                    borderRadius: 5,
                    borderWidth: 0
                }
            ]
        });
    }, [activeSegmentation]);

    const hoverDoughnut = {
        id: 'hoverDoughnut',
        afterDraw: (chart, args, options) => {
            const datas = chart.data.datasets[0].data;
            const labels = chart.data.labels;
            if (chart._active.length > 0) {
                const pointIndex = chart._active[0].index;
                const hoveredLabel = labels[pointIndex];
                const hoveredDataVar = datas[pointIndex];
                setHoveredData({ label: hoveredLabel, data: hoveredDataVar });
            } else {
                setHoveredData(null);
            }
        }
    }

    const options = {
        spacing: 10,
        plugins: {
            tooltip: {
                enabled: false
            },
            legend: {
                display: false,
                position: 'right',
                padding: {
                    left: 20,
                }
            },
            title: {
                display: false,
            },
        },
    };

    function toggleSegmentation(option) {
        if (option === "Sectors") {
            setActiveSegmentation({
                legend: segmentationOptions[0].value,
                labels: sectorsNames,
                data: sectorsExposures
            });
        } else if (option === "Holders") {
            setActiveSegmentation({
                legend: segmentationOptions[1].value,
                labels: etfHoldersNames,
                data: etfHoldersExposures
            });
        } else {
            setActiveSegmentation({
                legend: segmentationOptions[2].value,
                labels: countriesNames,
                data: countriesExposures
            });
        }
    }

    if (!doghnutChart.labels) {
        return (<div>...</div>)
    } else {
        return (
            <section className={`${styles.section}`} id="segmentation" >
                <h2 className={`${styles.heading} text-2xl mb-8`}>Segmentation</h2>
                <div className="w-full flex flex-col tableBrkpt:flex-row items-center gap-8 tableBrkpt:gap-20">
                    <div className="flex tableBrkpt:hidden items-center gap-4 border-b border-gray-200 dark:border-opacity-20 w-full pb-4">
                        {segmentationOptions.map(option => (
                            <button key={option.value} onClick={() => toggleSegmentation(option.value)}
                                className={`py-2 px-4 rounded-xl transition-all ${activeSegmentation.legend === option.value ? "bg-primary-clr text-white shadow-sm" : ""}`}>
                                {option.label}
                            </button>
                        ))}
                    </div>
                    <div className="tableBrkpt:flex-1 flex items-center justify-center w-full">
                        <div className="min-w-72 max-w-xs tableBrkpt:mt-10 relative">
                            <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                                <h2 className="whitespace-nowrap max-w-[18ch] truncate">
                                    {hoveredData ? hoveredData.label : activeSegmentation.labels[0]}
                                </h2>
                                <h3 className="font-bold text-2xl">
                                    {hoveredData ? hoveredData.data : activeSegmentation.data[0]} %
                                </h3>
                            </div>
                            <Doughnut data={doghnutChart} options={options} plugins={[hoverDoughnut]} />
                        </div>
                    </div>
                    <div className="tableBrkpt:flex-2 w-full">
                        <div className="flex flex-col items-start gap-8 w-full">
                            <div className="hidden tableBrkpt:flex items-center gap-4 border-b border-gray-200 dark:border-opacity-20 w-full pb-4">
                                {segmentationOptions.map(option => (
                                    <button key={option.value} onClick={() => toggleSegmentation(option.value)}
                                        className={`py-2 px-4 rounded-xl transition-all ${activeSegmentation.legend === option.value ? "bg-primary-clr text-white shadow-sm" : ""}`}>
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                            <section className="w-full flex flex-col gap-2 tableBrkpt:min-h-[376px]">
                                {activeSegmentation.data.map((data, i) => (
                                    <div key={i} className="w-full flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: backgrounds[i] }} />
                                            <div className="max-w-[23ch] truncate">{activeSegmentation.labels[i]}</div>
                                        </div>
                                        <div>{data} %</div>
                                    </div>
                                ))}
                            </section>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
};

export default EtfSegmentation;
