import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div style={{ marginTop: '12px' }}>
        <a className="btn small" href="#top">
          {t.backToTop}
        </a>
      </div>
      <div style={{ marginTop: '12px' }}>
        © {currentYear} • {t.footerText}
      </div>
    </footer>
  );
};

export default Footer;
