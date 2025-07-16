"use client"
import React, { useState } from 'react';
import styles from './galery.module.scss';

const imageUrls = [
  '/malir6.png',
  '/pumpposterBBigger.png',
  '/pump_insta.jpg',
  '/A_logo.svg',
  '/dp-web.png',
  '/deardiary.png',
  '/zamek1.png',
  '/deardiary-ph.PNG',
  '/fan-pic2.png',
  '/malir5.png',
];

const Gallery = () => {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const openLightbox = (src) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  return (
    <>
      {/* wrapper s max-width */}
      <div className={styles.wrapper}>
        <h1 className={styles.nadpis}>Galerie</h1>
        <div className={styles.grid}>
          {imageUrls.map((src, idx) => (
            <div
              key={idx}
              className={styles.item}
              onClick={() => openLightbox(src)}
            >
              <img src={src} alt={`Galerie ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {lightboxSrc && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <img src={lightboxSrc} alt="Zvětšený obrázek" />
        </div>
      )}
    </>
  );
};

export default Gallery;
