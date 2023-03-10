import React from "react";
import { Link } from "react-router-dom";

function Dropgroup({ heading, links }) {

    return (
        <div className="relative group">
            <span className="inline-flex items-center px-4 py-2 cursor-pointer">
                {heading} <i className="fa-solid fa-chevron-down ml-2 group-hover:-rotate-180 transition-all"></i>
            </span>
            <div className="absolute top-full shadow-headerBox dark:shadow-darkHeaderBox rounded-lg bg-white dark:bg-bg-dark-secondary cursor-auto hidden group-hover:block p-4 left-0 w-max z-50">
                {links.map((link) => (
                    link.linkContent !== "Twitter" ? (
                        <Link key={link.linkContent} to={link.goTo} className="flex items-center gap-4 p-3.5 rounded-lg hover:bg-bg-links-hover dark:hover:bg-bg-dark-hover transition duration-200 cursor-pointer">
                            <img src={link.icon} alt={link.linkContent} className="object-cover w-8 h-8" />
                            <span>{link.linkContent}</span>
                        </Link>
                    ) :
                        <a key={link.linkContent} href={link.goTo} target="_blank" className="flex items-center gap-4 p-3.5 rounded-lg hover:bg-bg-links-hover dark:hover:bg-bg-dark-hover transition duration-200 cursor-pointer">
                            <img src={link.icon} alt={link.linkContent} className="object-cover w-8 h-8" />
                            <span>{link.linkContent}</span>
                        </a>
                ))}
            </div>
        </div>
    );
}

export default Dropgroup;
