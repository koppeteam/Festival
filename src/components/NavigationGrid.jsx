import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const NavigationGrid = () => {
  const { t } = useLanguage();

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleKeyDown = (e, target) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      goTo(target);
    }
  };

  const navItems = ['o1', 'o2', 'o3', 'o4', 'o5', 'o6'];

  return (
    <div aria-label="Quick navigation" className="navGrid" role="navigation">
      {navItems.map((item) => (
        <div
          key={item}
          aria-label={t.nav[item].title}
          className={`navCard ${item}`}
          onClick={() => goTo(item)}
          onKeyDown={(e) => handleKeyDown(e, item)}
          role="button"
          tabIndex="0"
        >
          <div className="label">
            <strong>{t.nav[item].title}</strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavigationGrid;
