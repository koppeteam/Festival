import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { GALLERY_IMAGES } from '../common/constants';

const Section01 = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="o1">
      <div className="sectionHead">
        <div>
          <h2>{t.section01.title}</h2>
          <p>{t.section01.description}</p>
        </div>
      </div>

      <div className="box">
        <div className="gallery-scrollable" id="gallery">
          {GALLERY_IMAGES.map((image) => (
            <div className="thumb" key={image.id}>
              <img 
                src={image.url} 
                alt={image.alt}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'grid';
                }}
              />
              <div className="empty" style={{ display: 'none' }}>
                {t.section01.photoPlaceholder}
              </div>
            </div>
          ))}
        </div>
        <p className="note" style={{ margin: '10px 0 0' }}>
          {t.section01.note}
        </p>
      </div>
    </section>
  );
};

export default Section01;
