import React, { useEffect, useState } from "react";
import styles from "../Styles";
import { etf } from "../Components/DetailsETF/DummyData";
import BlueBannerEtfDetails from "../Components/DetailsETF/BlueBannerEtfDetails";
import EtfAbout from "../Components/DetailsETF/About/EtfAbout";
import EtfKeyData from "../Components/DetailsETF/KeyData/EtfKeyData";
import EtfDividends from "../Components/DetailsETF/Dividends/EtfDividends";
import EtfNavlinks from "../Components/DetailsETF/EtfNavlinks";
import EtfSegmentation from "../Components/DetailsETF/Segmentation/EtfSegmentation";
import { RecentlyViewed } from "../Components";

function DetailsETF() {
    const [chartData, setChartData] = useState([]);
    const [currentPrice, setCurrentPrice] = useState(null);

    const anchorLinks = [
        { text: "Infos Clés", goto: "keyData" },
        { text: "À propos", goto: "about" },
        { text: "Dividendes", goto: "dividend" },
        { text: "Segmentation", goto: "segmentation" }
    ];

    const [activeLink, setActiveLink] = useState(anchorLinks[0].goto);

    return (
        <>
            <BlueBannerEtfDetails etf={etf} currentPrice={currentPrice}>
                <section className={`${styles.section} mt-0 relative z-[2]`}>
                    {/* <EtfNavlinks anchorLinks={anchorLinks} activeLink={activeLink} setActiveLink={setActiveLink} /> */}
                    <EtfKeyData etf={etf} chartData={chartData} setChartData={setChartData} currentPrice={currentPrice} setCurrentPrice={setCurrentPrice} />
                </section>
                <EtfAbout etf={etf} />
                <EtfDividends etf={etf} chartData={chartData} setChartData={setChartData} currentPrice={currentPrice} setCurrentPrice={setCurrentPrice} />
                <EtfSegmentation etf={etf} />
                <RecentlyViewed />
            </BlueBannerEtfDetails>
        </>
    );
};

export default DetailsETF;
