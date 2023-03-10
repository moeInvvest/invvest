import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles";
import Dropgroup from "./Dropgroup";
import ModeSwitcher from "./ModeSwitcher";
import { iconAbout, iconCrypto, iconETF, iconForum, iconPro, iconPublicPortfolio, iconStocks, iconTwitter, logo, logoWhite } from "../../Assets";
import Accordion from "./Accordion";

function Header() {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const isDarkMode = theme === "dark";
    const [open, setIsOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);

    function handleNavClick(e) {
        if (e.target.tagName !== "H2" &&
            e.target.tagName !== "DIV" &&
            e.target.tagName !== "I" &&
            e.target.tagName !== "BUTTON"
        ) {
            setIsOpen(false)
        }
    };

    const backdropRef = useRef(null);

    function hanldeBackdropClick(e) {
        if (backdropRef.current === e.target) {
            setIsOpen(false)
        }
    }

    return (
        <header className={`${styles.boxWidth} mx-auto flex justify-between items-center py-5 px-4`}>
            <div className="left-header">
                <Link to="/"><img src={isDarkMode ? logoWhite : logo} alt="moning" /></Link>
            </div>
            <>
                <nav className="hidden xl:flex">
                    <ul className="flex gap-4 font-bold items-center">
                        <Dropgroup heading="Screeners" links={[
                            { linkContent: "Actions", goTo: "/stocks", icon: iconStocks },
                            { linkContent: "ETFs", goTo: "/etf", icon: iconETF },
                            { linkContent: "Cryptos", goTo: "/crypto", icon: iconCrypto }
                        ]} />
                        <Dropgroup heading="Communauté" links={[
                            { linkContent: "Forum de discussion", goTo: "/", icon: iconForum },
                            { linkContent: "Portefeuilles publics", goTo: "/portfolios", icon: iconPublicPortfolio },
                        ]} />
                        <Link to="/pro" className="flex items-center bg-bg-yellow transition-all hover:bg-bg-yellow-darker text-text-dark py-2 px-3 rounded-md hover:shadow-proShadow">
                            <span>Invvest PRO</span>
                            <img src={iconPro} alt="icon pro" className="w-5 h-5 ml-2" />
                        </Link>
                        <Dropgroup heading="À propos" links={[
                            { linkContent: "Notre histoire", goTo: "/about", icon: iconAbout },
                            { linkContent: "Twitter", goTo: "https://twitter.com/home?lang=en", icon: iconTwitter },
                        ]} />
                    </ul>
                </nav>
                <div className="right-header hidden xl:flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <ModeSwitcher theme={theme} setTheme={setTheme} />
                    </div>
                    <div className="flex items-center gap-2">
                        <Link to="/login" className={`${styles.secondaryButton}`}>Se connecter</Link>
                        <Link to="/signup" className={styles.primaryButton}>S'inscrire</Link>
                    </div>
                </div>
            </>


            {/* MOBILE NAVBAR */}
            <div className="block xl:hidden mobile-navbar">
                <i className="fa-solid fa-bars text-3xl cursor-pointer" onClick={() => setIsOpen(prev => !prev)}></i>
                <div className={`transition-[left] z-[4] ${open ? "fixed backdrop w-full bg-[rgba(0,0,0,0.1)] top-0 left-0 h-screen" : "bg-transparent"}`} onClick={hanldeBackdropClick} ref={backdropRef}>
                    <nav className={`fixed h-screen bg-bg-light dark:bg-bg-dark-secondary w-full md:w-1/2 top-0 z-[3] transition-all border-l border-border-light dark:border-[rgba(238,238,238,0.3)] ${open ? "left-0 md:left-1/2" : "left-full"}`} onClick={handleNavClick}>
                        <div className="px-4 py-5 nav-header flex items-center justify-between bg-bg-light dark:bg-bg-dark border-border-light border-b">
                            <Link to="/"><img src={isDarkMode ? logoWhite : logo} alt="moning" /></Link>
                            <div className="flex items-center gap-6">
                                <ModeSwitcher theme={theme} setTheme={setTheme} />
                                <i className="fa-solid fa-xmark text-3xl cursor-pointer" onClick={() => setIsOpen(prev => !prev)}></i>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="px-4 flex flex-col gap-4 mt-3">
                                <Accordion
                                    heading="Screeners"
                                    activeAccordion={activeAccordion}
                                    setActiveAccordion={setActiveAccordion}
                                    idx={1}
                                    links={[
                                        { linkContent: "Actions", goTo: "/stocks", icon: iconStocks },
                                        { linkContent: "ETFs", goTo: "/etf", icon: iconETF },
                                        { linkContent: "Cryptos", goTo: "/crypto", icon: iconCrypto }
                                    ]} />
                                <Accordion
                                    heading="Communauté"
                                    activeAccordion={activeAccordion}
                                    setActiveAccordion={setActiveAccordion}
                                    idx={2}
                                    links={[
                                        { linkContent: "Forum de discussion", goTo: "/", icon: iconForum },
                                        { linkContent: "Portefeuilles publics", goTo: "/portfolios", icon: iconPublicPortfolio },
                                    ]} />
                                <Link to="/pro" className="flex items-center bg-bg-yellow transition-all hover:bg-bg-yellow-darker text-text-dark py-2 px-3 rounded-md hover:shadow-proShadow font-bold border-b border-border-lighter">
                                    <span>Invvest PRO</span>
                                    <img src={iconPro} alt="icon pro" className="w-5 h-5 ml-2" />
                                </Link>
                                <Accordion
                                    heading="À propos"
                                    activeAccordion={activeAccordion}
                                    setActiveAccordion={setActiveAccordion}
                                    idx={3}
                                    links={[
                                        { linkContent: "Notre histoire", goTo: "/about", icon: iconAbout },
                                        { linkContent: "Twitter", goTo: "https://twitter.com/home?lang=en", icon: iconTwitter },
                                    ]} />
                            </div>
                            <div className="flex items-center gap-2 w-full px-4 mt-5 mb-1">
                                <Link to="/login" className={`${styles.secondaryButton} w-full text-center`}>Se connecter</Link>
                                <Link to="/signup" className={`${styles.primaryButton} w-full text-center`}>S'inscrire</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
