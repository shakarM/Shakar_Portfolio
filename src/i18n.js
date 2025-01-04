import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../src/locales/en/translations.json";
import kuTranslations from "../src/locales/ku/translations.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    ku: { translation: kuTranslations },
  },
  lng: "ku", // Default language
  fallbackLng: "ku",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
