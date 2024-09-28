// src/i18n/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "../Translations/en.json";
import Persion from "../Translations/fa.json";

i18n.use(initReactI18next).init({
  resources: {
    fa: { translation: Persion },
    en: { translation: English },
  },
  lng: "fa", // Set the default language
  fallbackLng: "en", // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // Allows HTML tags in translations
  },
});

export default i18n;
