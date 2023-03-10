import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

function ModeSwitcher({ theme, setTheme }) {
    const { toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        if (!localStorage.getItem("theme")) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme("dark");
                toggleTheme();
            } else {
                setTheme("light");
                toggleTheme();
            }
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem('theme', theme);
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem('theme', theme);
        };
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        toggleTheme();
    };

    return (
        <i className={`fa-solid ${theme === "light" ? "fa-moon" : "fa-sun"} text-2xl cursor-pointer`} onClick={handleThemeSwitch}></i>
    );
}

export default ModeSwitcher;
