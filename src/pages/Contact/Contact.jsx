import React from "react";
import { useTranslation } from 'react-i18next';
import '../../App.css'

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
        <main className="center main">
            <h1>{t('main.contact')}</h1>
        </main>
    </>
  );
};

export default Contact;