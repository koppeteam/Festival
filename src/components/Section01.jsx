import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { GALLERY_IMAGES } from '../common/constants';

const Section01 = () => {
  const { t } = useLanguage();
  const galleryRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [zoom, setZoom] = useState(1);

  /* ================= RESPONSIVE ================= */
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* ================= AUTO SCROLL (MOBILE ONLY) ================= */
  useEffect(() => {
    if (!isMobile) return;

    const gallery = galleryRef.current;
    if (!gallery) return;

    const interval = setInterval(() => {
      const width = gallery.clientWidth;
      if (gallery.scrollLeft + width >= gallery.scrollWidth - 2) {
        gallery.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        gallery.scrollBy({ left: width, behavior: 'smooth' });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isMobile]);

  /* ================= MODAL ================= */
  const openModal = (img) => {
    setModalImg(img);
    setZoom(1);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
    setZoom(1);
  };

  const handleZoom = (d) => setZoom((z) => Math.max(1, Math.min(z + d, 4)));

  return (
    <section className="section" id="o1">
     <div className="sectionHead">
        <div>
          <h2>{t.section01.title}</h2>
          <p>{t.section01.description}</p>
        </div>
      </div>
      <div className="box">
        {/* ================= GALLERY ================= */}
        <div
          ref={galleryRef}
          style={{
            display: 'flex',
            gap: 16,
            overflowX: GALLERY_IMAGES.length > (isMobile ? 1 : 4) ? 'auto' : 'hidden',
            scrollSnapType: isMobile ? 'x mandatory' : 'none',
            padding: '12px 0',
          }}
        >
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              onClick={() => openModal(img)}
              style={{
                flex: isMobile ? '0 0 100%' : '0 0 auto',
                width: isMobile ? '100%' : 260,
                height: 170,
                borderRadius: 16,
                background: isMobile ? '#090127' : '#fff',
                cursor: 'zoom-in',
                scrollSnapAlign: isMobile ? 'start' : 'unset',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                boxSizing: 'border-box',
              }}
            >
              <img
                src={img.url}
                alt={img.alt}
                draggable={false}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>

        {/* ================= MODAL ================= */}
        {modalOpen && modalImg && (
          <div
            onClick={closeModal}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.9)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 16,
            }}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <div
                style={{
                  width: '90vw',
                  height: '70vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={modalImg.url}
                  alt={modalImg.alt}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    transform: `scale(${zoom})`,
                    borderRadius: 10,
                    background: '#111',
                  }}
                />
              </div>

              <div style={{ marginTop: 18, display: 'flex', gap: 12, justifyContent: 'center' }}>
                <button className="btn small" onClick={() => handleZoom(0.25)}>＋</button>
                <button className="btn small" onClick={() => handleZoom(-0.25)}>－</button>
                <button className="btn small" onClick={closeModal}>✕</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Section01;
