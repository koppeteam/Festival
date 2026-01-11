import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [showYtHint, setShowYtHint] = useState(false);
  const ytId = 'eSEM4h2Bbq0';

  useEffect(() => {
    if (window.location.protocol === 'file:') {
      setShowYtHint(true);
    }
  }, []);

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

      <div className="heroActions">
        <div className="heroBtns">
          <a
            className="btn"
            href={`https://youtu.be/${ytId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.openYoutube}
          </a>
        </div>
        {showYtHint && (
          <div className="note" id="ytHint">
            {t.youtubeError}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
