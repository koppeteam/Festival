import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Section05 = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="o5">
      <div className="sectionHead">
        <div>
          <h2>{t.section05.title}</h2>
          <p>{t.section05.description}</p>
        </div>
      </div>
      <div className="box">
        <ul className="list">
          <li>
            <b>{t.section05.toiletPoint}-1:</b> {t.section05.point1}
          </li>
          <li>
            <b>{t.section05.toiletPoint}-2:</b> {t.section05.point2}
          </li>
          <li>
            <b>{t.section05.toiletPoint}-3:</b> {t.section05.point3}
          </li>
        </ul>
        <p className="note" style={{ margin: '10px 0 0' }}>
          {t.section05.note}
        </p>
      </div>
    </section>
  );
};

export default Section05;
