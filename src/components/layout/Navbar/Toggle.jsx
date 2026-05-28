import React, { useContext, useEffect } from "react";
import "./Toggle.scss";
import { ThemeContext } from "../../../context/ThemeProvider";
import { IoSunny } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";

const Toggle = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const event = new CustomEvent("themeChanged", { detail: theme });
    window.dispatchEvent(event);
  }, [theme]);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    changeTheme(newTheme);
  };

  return (
    <div className="theme-toggle" onClick={handleThemeChange}>
      <div
        className={`switcher-container ${theme === "dark" ? "dark" : "light"}`}
      >
        <div className={`toggle-switch ${theme === "dark" ? "toggled" : ""}`}>
          {theme === "dark" ? (
            <BsMoonStarsFill className="icon " />
          ) : (
            <IoSunny className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Toggle;
