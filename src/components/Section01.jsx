import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { GALLERY_IMAGES } from '../common/constants';
import { useEffect, useRef } from "react";

import { useState } from "react";

const Section01 = () => {
  const { t } = useLanguage();
  const galleryRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const scrollAmount = 220; // width of one image (adjust if needed)

    const interval = setInterval(() => {
      if (
        gallery.scrollLeft + gallery.clientWidth >=
        gallery.scrollWidth
      ) {
        // Reset to start when end is reached
        gallery.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 2000); // ⏱️ 2 seconds

    return () => clearInterval(interval);
  }, []);

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

  const handleZoom = (delta) => {
    setZoom((z) => Math.max(1, Math.min(z + delta, 4)));
  };

  // For panning when zoomed
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
    setPan({ x: e.clientX - start.x, y: e.clientY - start.y });
  };
  const handleMouseUp = () => setDragging(false);

  // Reset pan on zoom reset or modal close
  React.useEffect(() => {
    if (!modalOpen || zoom === 1) setPan({ x: 0, y: 0 });
  }, [modalOpen, zoom]);

  return (
    <section className="section" id="o1">
      <div className="sectionHead">
        <div>
          <h2>{t.section01.title}</h2>
          <p>{t.section01.description}</p>
        </div>
      </div>

      <div className="box">
        <div
          className="gallery-scrollable"
          id="gallery"
          ref={galleryRef}
        >
          {GALLERY_IMAGES.map((image) => (
            <div className="thumb" key={image.id} style={{ cursor: 'zoom-in' }}>
              <img
                src={image.url}
                alt={image.alt}
                onClick={() => openModal(image)}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "grid";
                }}
              />
              <div className="empty" style={{ display: "none" }}>
                {t.section01.photoPlaceholder}
              </div>
            </div>
          ))}
        </div>

        {modalOpen && modalImg && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.88)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
            onClick={closeModal}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              style={{
                position: 'relative',
                background: 'rgba(0,0,0,0.1)',
                borderRadius: 12,
                padding: 16,
                boxShadow: '0 8px 32px #000a',
                maxWidth: '96vw',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflow: 'hidden',
              }}
              onClick={e => e.stopPropagation()}
            >
              <div
                style={{
                  width: '80vw',
                  height: '70vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'auto',
                  cursor: zoom > 1 ? 'grab' : 'zoom-out',
                  position: 'relative',
                  background: 'transparent',
                }}
              >
                <img
                  src={modalImg.url}
                  alt={modalImg.alt}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                    transition: dragging ? 'none' : 'transform 0.2s',
                    borderRadius: 8,
                    boxShadow: '0 2px 16px #0008',
                    background: '#222',
                    userSelect: 'none',
                  }}
                  draggable={false}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                />
              </div>
              {/* Controls below image, not overlapping */}
              <div
                style={{
                  width: '80vw',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 16,
                  margin: '24px auto 0',
                  background: 'rgba(20,20,20,0.92)',
                  borderRadius: 24,
                  padding: '10px 24px',
                  boxShadow: '0 2px 12px #0008',
                  position: 'relative',
                  zIndex: 2,
                  maxWidth: '96vw',
                }}
              >
                <button className="btn small" onClick={() => handleZoom(0.25)} type="button">+</button>
                <button className="btn small" onClick={() => handleZoom(-0.25)} type="button">-</button>
                <a
                  className="btn small"
                  href={modalImg.url}
                  download
                  target="_blank"
                  rel="noopener"
                  style={{ textDecoration: 'none' }}
                >
                  ⬇️ {t.section01.download || 'Download'}
                </a>
                <button className="btn small" onClick={closeModal} type="button">✕</button>
              </div>
            </div>
          </div>
        )}

        <p className="note" style={{ margin: "10px 0 0" }}>
          {t.section01.note}
        </p>
      </div>
    </section>
  );
};

export default Section01;
