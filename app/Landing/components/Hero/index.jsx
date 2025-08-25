"use client";

import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Zámečnická pohotovost 24/7</h1>
        <p className={styles.subtitle}>
          Vyrážíme ihned po zavolání, případně se domluvíme na termínu, který vám bude vyhovovat.
        </p>
        <button className={styles.cta}>Kontakt</button>
      </div>
      <div className={styles.image}>
        <img src="/lock.jpg" alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
