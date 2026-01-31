import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Hero = () => {
  useLanguage();
  const ytId = 'eSEM4h2Bbq0';

  // Removed unused showYtHint and t

  const buildYtSrc = () => {
    const base = `https://www.youtube-nocookie.com/embed/${ytId}`;
    const params = new URLSearchParams({
      rel: '0',
      modestbranding: '1',
      playsinline: '1'
    });

    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      params.set('origin', window.location.origin);
    }
    return `${base}?${params.toString()}`;
  };

  return (
    <section aria-label="Video / Photo box" className="hero">
      <div className="media" id="mediaBox">
        <iframe
          id="heroYouTube"
          title="YouTube video player"
          src={buildYtSrc()}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
