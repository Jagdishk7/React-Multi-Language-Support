import React from "react";
import { useTranslation } from "react-i18next";
import "../../App.css";

const Contact = () => {
  // extracting the t property by using destructuring
  const { t } = useTranslation();
  return (
    <>
      <main className="main">
        {/* populating data from locales folder depend upon selected language */}
        <h1>{t("main.contact")}</h1>
      </main>
    </>
  );
};

export default Contact;
