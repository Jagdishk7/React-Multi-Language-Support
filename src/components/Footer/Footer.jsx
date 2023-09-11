import React from 'react'
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

  return (
    < >
    <div className='footer'>
    {t('main.footer')} &nbsp; <a href="https://www.linkedin.com/checkpoint/challengesV2/AQFAKEnaQiKhvQAAAYqFaDY_Pq5FMmYROlMkRjXwyvY2gtI9oYMrwBHGjHrZviAk5VbO-btlQXQRafIKmKsufaP3AawDdp8SUQ">Jagdeesh Kushwaha</a>
    </div>
    </>
  )
}

export default Footer
