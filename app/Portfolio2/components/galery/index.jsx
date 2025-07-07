"use client"
import React, { useState } from 'react';
import styles from './galery.module.scss';

const imageUrls = [
  '/malir1.png',
  '/pumpposterBB.png',
  '/pump_insta.jpg',
  '/A_logo.svg',
  '/malir4.png',
  '/deardiary.png',
  '/malir2.png',
  '/malir3.png',
  '/malir4.png',
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
