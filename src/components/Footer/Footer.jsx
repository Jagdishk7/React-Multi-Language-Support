import React from 'react'
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

  return (
    < >
    <div className='footer'>
    {t('main.footer')} &nbsp; <a href="https://www.linkedin.com/in/jagdeesh-kushwaha-%E2%9A%9B%EF%B8%8F-0218aa230">Jagdeesh Kushwaha</a>
    </div>
    </>
  )
}

export default Footer
