import React from "react";
import { useTranslation } from 'react-i18next';
import '../../App.css'

const Home = () => {
    const { t } = useTranslation();

  return (
    <>
      <main className="center main">
      <h1>{t('main.home')}</h1>
      </main>
    </>
  );
};

export default Home;
