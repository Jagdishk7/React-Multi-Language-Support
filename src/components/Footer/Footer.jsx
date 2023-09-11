import React from 'react'
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

  return (
    < >
    <div className='footer'>
    {t('main.footer')} &nbsp; <a href="linkedin.com/in/jagdeesh-kushwaha-⚛%EF%B8%8F-0218aa230/">Jagdeesh Kushwaha</a>
    </div>
    </>
  )
}

export default Footer
