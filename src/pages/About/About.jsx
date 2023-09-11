import React from "react";
import { useTranslation } from 'react-i18next';
import '../../App.css'

const About = () => {
  const { t } = useTranslation();

  return (
    <>
    <main className="center main">
      <h1>{t('main.about')}</h1>
    </main>
      
    </>
  );
};

export default About;
