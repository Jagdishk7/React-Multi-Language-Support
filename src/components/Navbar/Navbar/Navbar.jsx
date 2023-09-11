import React, { useState , useEffect } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";

const locales = {
  en: { nativeName: 'English' },
  hi: { nativeName: 'हिंदी' },
  chi: { nativeName: '中国人' },
  ko: { nativeName: '한국인' },
  ar: { nativeName: 'عربي' }
};

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const { i18n } = useTranslation();
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src="assets/olecons.png" alt="" />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setShowMediaIcons(false)}>Home</NavLink>
            </li>
 
            <li>
              <NavLink to="/about" onClick={() => setShowMediaIcons(false)}>About</NavLink>
            </li>
          
            <li>
              <NavLink to="/contact" onClick={() => setShowMediaIcons(false)}>Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="btn-container jcsb">
          {Object.keys(locales).map((locale) => (
            <button key={locale} style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(locale)}>
              {locales[locale].nativeName}
            </button>
          ))}
        </div>

        {/* 3rd social media links */}
        
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <div onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </div>
          </div>
      
      </nav>
    </>
  );
};

export default Navbar;