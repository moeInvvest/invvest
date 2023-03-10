import React, { useState } from "react";

function LanguageHandler({ mobileNav }) {
    const [activeLang, setActiveLang] = useState("FR");
    const languages = [{ lang: "FR", active: true }, { lang: "EN", active: false }];

    if (mobileNav) {
        return (
            <div className="w-full p-1 flex items-center justify-center rounded-full font-bold bg-light-gray">
                {languages.map((lang, idx) => (
                    <button
                        key={idx}
                        className={`text-text-dark w-full h-full text-center transition-all relative z-[6] ${activeLang === lang.lang && "active-lang before:bg-white before:rounded-full"}`}
                        onClick={() => setActiveLang(lang.lang)}>{lang.lang}</button>
                ))}
            </div>
        )
    } else {
        return (
            <div className="relative group font-bold">
                <span className="inline-flex items-center px-2 py-2 cursor-pointer">
                    FR <i className="fa-solid fa-chevron-down ml-2 group-hover:-rotate-180 transition-all"></i>
                </span>
                <div className="absolute top-full shadow-headerBox dark:shadow-darkHeaderBox rounded-lg bg-white dark:bg-bg-dark-secondary cursor-auto hidden group-hover:block left-0 w-max z-50">
                    {languages.map((lang, idx) => (
                        <span key={idx} className="flex items-center rounded-lg px-4 py-2 hover:bg-bg-links-hover dark:hover:bg-bg-dark-hover transition duration-200 cursor-pointer">{lang.lang}</span>
                    ))}
                </div>
            </div>
        );
    }
};

export default LanguageHandler;
