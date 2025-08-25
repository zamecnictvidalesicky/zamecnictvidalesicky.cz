'use client';

import React, { useRef } from 'react';


import Navbar from './components/Headertwo';
import Hero from './components/Hero';
import Prices from './components/Prices';
import Notfoundus from './components/Notfoundus';

import Cta from './components/Cta';

import Footer from './components/Footer';
import Sluzby from './components/sluzby';
import Aboutus from './components/Aboutus';




import styles from './Landing.module.scss';

export default function Page() {
  const projectNewRef = useRef(null);
  const galleryRef    = useRef(null);

  const scrollToProjectNew = () => {
    projectNewRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="Web-development" className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.subnav2}>
          <div className={styles.menu}><Navbar /></div>
        </div>
      </div>

      <div>
        <Hero />
      </div>
      <div>
        <Sluzby />
        
      </div>
      <div>
        <Notfoundus />
      </div>
      <div>
        <Aboutus />
      </div>
      <div>
        <Cta />
      </div>
      <div>
        <Prices />
      </div>
      <div>
        <Footer />
      </div>
      
    </div>
  );
}