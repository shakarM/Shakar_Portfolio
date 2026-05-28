import React, { createContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const { i18n } = useTranslation();

    const changeTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    // Strict RTL/LTR Handling based on Kurdish active locale
    useEffect(() => {
        const isKurdish = i18n.language === "ku";
        document.documentElement.dir = isKurdish ? "rtl" : "ltr";

        // Optional: add a global class for styling overrides
        if (isKurdish) {
            document.documentElement.classList.add('kurdish');
        } else {
            document.documentElement.classList.remove('kurdish');
        }
    }, [i18n.language]);

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <div className={`app-wrapper theme-${theme}`} id={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
