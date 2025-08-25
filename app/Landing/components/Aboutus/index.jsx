"use client";

import React from "react";
import styles from "./Aboutus.module.scss";

const aboutData = [
  {
    title: "Profesionální tým",
    desc: "Naši zkušení odborníci zajistí kvalitní řešení."
  },
  {
    title: "Dostupné ceny",
    desc: "Nabízíme služby za férové a transparentní ceny."
  },
  {
    title: "Rychlá realizace",
    desc: "Vaše zakázky řešíme efektivně a včas."
  },
  {
    title: "Osobní přístup",
    desc: "S každým klientem komunikujeme individuálně."
  }
];

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.heading}>O nás</h2>
      <div className={styles.grid}>
        {aboutData.map((item) => (
          <div key={item.title} className={styles.card}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
