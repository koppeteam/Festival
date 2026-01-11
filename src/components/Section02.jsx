import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Section02 = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="o2">
      <div className="sectionHead">
        <div>
          <h2>{t.section02.title}</h2>
          <p>{t.section02.description}</p>
        </div>
      </div>
      <div className="box">
        <h3 style={{ margin: '0 0 8px' }}>{t.section02.diversionTitle}</h3>
        <ul className="list">
          <li>
            <b>{t.section02.route1}</b>{' '}
            <a
              href="https://maps.app.goo.gl/NsJcZStfvKSTbdmd7"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t.section02.viewMap}
            </a>
          </li>
          <li>
            <b>{t.section02.route2}</b>{' '}
            <a
              href="https://maps.app.goo.gl/h1xcuZ9fuLVFFtaD9"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t.section02.viewMap}
            </a>
          </li>
          <li>
            <b>{t.section02.heavyVehicles}</b> {t.section02.heavyVehiclesInfo}
          </li>
        </ul>
        <p className="note" style={{ margin: '10px 0 0' }}>
          {t.section02.note}
        </p>
      </div>
    </section>
  );
};

export default Section02;
