"use client";

import React from "react";
import styles from "./Services.module.scss";

const servicesData = [
  {
    title: "Zámečnické práce",
    icon: "StarA.svg",
    desc: "Kompletní zámečnické služby pro domácnosti i firmy.",
  },
  {
    title: "Výroba bran a plotů",
    icon: "StarA.svg",
    desc: "Zakázková výroba bran, vrat a oplocení.",
  },
  {
    title: "Montáž zábradlí",
    icon: "StarA.svg",
    desc: "Bezpečná a designová zábradlí na míru.",
  },
  {
    title: "Opravy kovových konstrukcí",
    icon: "StarA.svg",
    desc: "Profesionální opravy a svařování konstrukcí.",
  },
  {
    title: "Nouzové otevírání",
    icon: "StarA.svg",
    desc: "Rychlá pomoc při ztrátě klíčů či zabouchnutí dveří.",
  },
  {
    title: "Bezpečnostní dveře",
    icon: "StarA.svg",
    desc: "Instalace a servis bezpečnostních dveří.",
  },
  {
    title: "Kovové schodiště",
    icon: "StarA.svg",
    desc: "Výroba a montáž kovových schodišť na míru.",
  },
  {
    title: "Konzultace a návrhy",
    icon: "StarA.svg",
    desc: "Odborné poradenství a návrhy řešení na klíč.",
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.heading}>Naše služby</h2>
      <div className={styles.grid}>
        {servicesData.map((svc) => (
          <div key={svc.title} className={styles.card}>
            <img src={svc.icon} alt={svc.title} className={styles.icon} />
            <h3 className={styles.title}>{svc.title}</h3>
            <p className={styles.desc}>{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
