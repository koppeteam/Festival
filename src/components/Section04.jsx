import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Section04 = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="o4">
      <div className="sectionHead">
        <div>
          <h2>{t.section04.title}</h2>
          <p>{t.section04.description}</p>
        </div>
      </div>
      <div className="contacts">
        <div className="contact">
          <div className="title">{t.section04.namma112}</div>
          <div className="meta">{t.section04.namma112Meta}</div>
          <div className="row">
            <a className="btn small" href="tel:112">{t.section04.call}</a>
          </div>
        </div>
        <div className="contact">
          <div className="title">{t.section04.controlRoom}</div>
          <div className="meta">08419-261133</div>
          <div className="row">
            <a className="btn small" href="tel:08419261133">{t.section04.call}</a>
          </div>
        </div>
        <div className="contact">
          <div className="title">{t.section04.gaddigeOutpost}</div>
          <div className="meta">8197240496</div>
          <div className="row">
            <a className="btn small" href="tel:8197240496">{t.section04.call}</a>
          </div>
        </div>
        <div className="contact">
          <div className="title">{t.section04.amusementOutpost}</div>
          <div className="meta">9886645344</div>
          <div className="row">
            <a className="btn small" href="tel:9886645344">{t.section04.call}</a>
          </div>
        </div>
        <div className="contact">
          <div className="title">{t.section04.inspector}</div>
          <div className="meta">9480805257</div>
          <div className="row">
            <a className="btn small" href="tel:9480805257">{t.section04.call}</a>
          </div>
        </div>
        <div className="contact">
          <div className="title">{t.section04.subInspector}</div>
          <div className="meta">9480805273</div>
          <div className="row">
            <a className="btn small" href="tel:9480805273">{t.section04.call}</a>
          </div>
        </div>
      </div>
      <p className="note" style={{ margin: '12px 0 0' }}>
        {t.section04.note}
      </p>
    </section>
  );
};

export default Section04;
