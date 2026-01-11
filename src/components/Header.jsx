import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { LOGOS } from '../common/constants';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <header className="topbar">
      <div className="logoWrap" title="Karnataka">
        <img alt="Karnataka emblem" src={LOGOS.karnataka} />
      </div>
      <div className="brand">
        <h1>{t.title}</h1>
        <h2>{t.subtitle}</h2>
        <p>{t.tagline}</p>
      </div>
      <div className="logoWrap" title="Namma 112">
        <img alt="Namma 112" src={LOGOS.namma112} />
      </div>
      <button className="btn language-toggle" onClick={toggleLanguage}>
        {language === 'kn' ? t.switchToEnglish : t.switchToKannada}
      </button>
    </header>
  );
};

export default Header;
