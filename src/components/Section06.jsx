import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Section06 = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="o6">
      <div className="sectionHead">
        <div>
          <h2>{t.section06.title}</h2>
          <p>{t.section06.description}</p>
        </div>
      </div>
      <div className="box">
        <ul className="list">
          <li>{t.section06.precaution1}</li>
          <li>{t.section06.precaution2}</li>
          <li>{t.section06.precaution3}</li>
          <li>{t.section06.precaution4}</li>
          <li>{t.section06.precaution5}</li>
          <li>{t.section06.precaution6}</li>
        </ul>
      </div>
    </section>
  );
};

export default Section06;
