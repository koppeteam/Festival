import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { GALLERY_IMAGES } from '../common/constants';

const Section01 = () => {
  const { t } = useLanguage();
  const galleryRef = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [zoom, setZoom] = useState(1);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
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
  }, []);

  /* ================= MODAL ================= */
  const openModal = (img) => {
    setModalImg(img);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleZoom = (delta) => {
    setZoom((z) => Math.max(1, Math.min(z + delta, 4)));
  };

  /* ================= PAN ================= */
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (zoom === 1) return;
    setDragging(true);
    setStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPan({
      x: e.clientX - start.x,
      y: e.clientY - start.y,
    });
  };

  const handleMouseUp = () => setDragging(false);

  useEffect(() => {
    if (!modalOpen || zoom === 1) setPan({ x: 0, y: 0 });
  }, [modalOpen, zoom]);

  return (
    <section className="section" id="o1">
      <div className="sectionHead">
        <h2>{t.section01.title}</h2>
        <p>{t.section01.description}</p>
      </div>

      <div className="box">
        {/* ================= GALLERY ================= */}
        <div
          ref={galleryRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              onClick={() => openModal(image)}
              style={{
                flex: '0 0 100%',            // 🔒 EXACTLY 1 IMAGE
                scrollSnapAlign: 'start',
                height: 180,
                padding: 12,
                boxSizing: 'border-box',
                cursor: 'zoom-in',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: '#fff',
                  borderRadius: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  draggable={false}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    userSelect: 'none',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ================= MODAL ================= */}
        {modalOpen && modalImg && (
          <div
            onClick={closeModal}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
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
                  overflow: 'hidden',
                }}
              >
                <img
                  src={modalImg.url}
                  alt={modalImg.alt}
                  draggable={false}
                  onMouseDown={handleMouseDown}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                    transition: dragging ? 'none' : 'transform 0.2s ease',
                    borderRadius: 10,
                    background: '#111',
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: 18,
                  display: 'flex',
                  gap: 12,
                  justifyContent: 'center',
                }}
              >
                <button className="btn small" onClick={() => handleZoom(0.25)}>＋</button>
                <button className="btn small" onClick={() => handleZoom(-0.25)}>－</button>
                  <a
                  className="btn small"
                  href={modalImg.url}
                  download
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: 'none' }}
                >
                  ⬇ {t.section01.download || 'Download'}
                </a>
                <button className="btn small" onClick={closeModal}>✕</button>
              </div>
            </div>
          </div>
        )}

        <p className="note" style={{ marginTop: 10 }}>
          {t.section01.note}
        </p>
      </div>
    </section>
  );
};

export default Section01;
