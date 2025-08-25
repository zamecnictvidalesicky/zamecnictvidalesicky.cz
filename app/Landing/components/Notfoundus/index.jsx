"use client";

import React from "react";
import styles from "./Notfoundus.module.scss";

const CallToAction = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <p className={styles.text}>
          Nenašli jste, co hledáte? <br />
          <span>Zavolejte nám a určitě najdeme řešení.</span>
        </p>
        <a href="tel:+420123456789" className={styles.button}>
          Zavolat
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
