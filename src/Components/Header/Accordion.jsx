import React from "react";
import { Link } from "react-router-dom";

function Accordion({ heading, activeAccordion, setActiveAccordion, idx, links }) {
    return (
        <div className="overflow-hidden relative font-bold">
            <div className="w-full flex items-center justify-between border-b border-border-lighter dark:border-border-white cursor-pointer bg-inherit z-10 pb-3" onClick={() => setActiveAccordion(prev => prev === idx ? null : idx)}>
                <h2>{heading}</h2>
                <i className={`fa-solid fa-chevron-down transition-transform ${activeAccordion === idx && "-rotate-180"}`}></i>
            </div>
            {/* ${activeAccordion === idx ? `h-[${48 * (links.length)}px]` : "h-0"} */}
            <div className={`flex-flex-col items-start transition-all`} style={activeAccordion === idx ? { height: 48 * (links.length) + "px" } : { height: 0 }}>
                {links.map((link, idx) => (
                    link.linkContent !== "Twitter" ? (
                        <Link key={link.linkContent} to={link.goTo} className="flex items-center gap-4 py-2">
                            <img src={link.icon} alt={link.linkContent} className="object-cover w-8 h-8" />
                            <span>{link.linkContent}</span>
                        </Link>
                    ) :
                        <a key={link.linkContent} href={link.goTo} target="_blank" className="flex items-center gap-4 py-2">
                            <img src={link.icon} alt={link.linkContent} className="object-cover w-8 h-8" />
                            <span>{link.linkContent}</span>
                        </a>
                ))}
            </div>
        </div>
    );
}

export default Accordion;
