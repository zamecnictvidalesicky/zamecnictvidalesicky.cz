"use client";

import React from "react";
import styles from "./Cta.module.scss";

const CallToAction = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <p className={styles.text}>
          Naše služby nikdy nespí! Zavolejte kdykoli – jsme tu pro vás 24 hodin denně, 7 dní v týdnu. Vaše pohodlí je naší prioritou.
        </p>
        <a href="tel:+420123456789" className={styles.button}>
          Zavolat
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
