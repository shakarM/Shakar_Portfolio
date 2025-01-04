import React from "react";
import Home from "./Home";
import "./App.scss";
import LanguageSwitcher from "./components/LanguageSwitcher";

import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="text-center flex items-center">
      <div className={i18n.language === "ku" ? "kurdish" : ""}>
        <Home />
      </div>
    </div>
  );
};

export default App;
