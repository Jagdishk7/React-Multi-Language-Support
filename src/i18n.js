import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// for passing in lng and translations on init
i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // passing the i18n instance to react-i18next.
  .use(initReactI18next)
  // initializing i18next
  .init({
      debug: true,
    //   if requested language will not be found we will use English
      fallbackLng: "en",
  });

export default i18n;
