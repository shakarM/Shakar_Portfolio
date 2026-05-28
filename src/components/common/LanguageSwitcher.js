import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.scss";
import ENG from "../../assets/images/circle.png";
import KU from "../../assets/icons/flag.png";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isKurdish, setIsKurdish] = useState(i18n.language === "ku");

  const changeLanguage = () => {
    const newLanguage = isKurdish ? "en" : "ku";
    i18n.changeLanguage(newLanguage);
    setIsKurdish(!isKurdish);
  };

  return (
    <div className="language-switcher">
      <div
        className={`switcher-container ${isKurdish ? "kurdish" : "english"}`}
        onClick={changeLanguage}
      >
        <div className={`toggle-switch ${isKurdish ? "toggled" : ""}`}>
          <img
            className="flag-icon"
            src={isKurdish ? KU : ENG}
            alt={isKurdish ? "Kurdish" : "English"}
          />
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
