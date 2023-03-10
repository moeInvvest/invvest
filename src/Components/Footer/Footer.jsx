import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles";
import { footerLinksBlocks, footerMainTitle, footerSocialIcons, footerSubTitle, subFooter } from "./footerinfos";

function Footer() {
    return (
        <footer className={"left-0 w-full bg-bg-dark-secondary text-text-light mt-20"}>
            <div className={`${styles.boxWidth} px-5 py-8`}>
                <div className="footer-header flex flex-col justify-between items-start lg:flex-row gap-4">
                    <div className="flex flex-col gap-11 items-start justify-between h-full border-b lg:border-none border-[rgba(238,238,238,0.1)] w-full pb-8 lg:pb-0">
                        <div className="flex flex-col gap-4 items-start justify-between">
                            <h2 className="text-xl font-bold">{footerMainTitle}</h2>
                            <p className="">{footerSubTitle}</p>
                        </div>
                        <div className="flex gap-4">
                            {footerSocialIcons.map((icon) => (
                                <img src={icon.icon} alt={icon.alt} key={icon.alt} className="w-6 h-6 object-cover" />
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-8 w-full">
                        {footerLinksBlocks.map((block) => (
                            <section key={block.title} className="w-max">
                                <h3 className="uppercase text-sm font-bold tracking-widest text-white/50">{block.title}</h3>
                                {block.links.map((link) => (
                                    <Link to={link.goTo} key={link.text} className="block text-sm lg:hover:opacity-80 transition text-white/70">{link.text}</Link>
                                ))}
                            </section>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-bg-dark-hover py-4">
                <div className={`${styles.boxWidth} text-xs text-white/70 px-4`}>
                    <article className="">{subFooter.main}</article>
                    <span className="block mt-4">{subFooter.copyright}</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
