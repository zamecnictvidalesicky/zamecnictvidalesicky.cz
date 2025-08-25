"use client";

import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logoSection}>
          <img
            src="/logo.png"
            alt="Logo firmy"
            className={styles.logo}
          />
          <span className={styles.companyName}>Zámečnictví Dalešický</span>
        </div>
        <div className={styles.contactSection}>
          <p>
            <strong>Telefon:</strong>{" "}
            <a href="tel:+420608097250">608 097 250</a>
          </p>
          <p>
            <strong>E-mail:</strong>{" "}
            <a href="mailto:domaproservis@gmail.com">
              domaproservis@gmail.com
            </a>
          </p>
          <p>
            <strong>Adresa:</strong> Michalská 966/74, Praha 4
          </p>
          <p>
            <a href="/zasady-ochrany-osobnich-udaju">
              Zásady ochrany osobních údajů
            </a>
          </p>
        </div>
      </div>
      <div className={styles.copy}>
        © {new Date().getFullYear()} Zámečnictví Dalešický. Všechna práva vyhrazena.
      </div>
    </footer>
  );
};

export default Footer;
