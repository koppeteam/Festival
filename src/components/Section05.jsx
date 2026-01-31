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
            <b>{t.section05.toiletPoint}-1:</b> {t.section05.point1.label} <a href={t.section05.point1.map} rel="noopener" target="_blank">ಮ್ಯಾಪ್ ನೋಡಿ</a>
          </li>
          <li>
            <b>{t.section05.toiletPoint}-2:</b> {t.section05.point2.label} <a href={t.section05.point2.map} rel="noopener" target="_blank">ಮ್ಯಾಪ್ ನೋಡಿ</a>
          </li>
          <li>
            <b>{t.section05.toiletPoint}-3:</b> {t.section05.point3.label} <a href={t.section05.point3.map} rel="noopener" target="_blank">ಮ್ಯಾಪ್ ನೋಡಿ</a>
          </li>
        </ul>
       
      </div>
    </section>
  );
};

export default Section05;
