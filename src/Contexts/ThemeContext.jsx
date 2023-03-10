import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext({
    globalTheme: "light",
    toggleTheme: () => { }
});

const ThemeProvider = ({ children }) => {
    const [globalTheme, setGlobalTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        localStorage.setItem("theme", globalTheme);
    }, [globalTheme]);

    const toggleTheme = () => {
        setGlobalTheme(globalTheme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ globalTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };