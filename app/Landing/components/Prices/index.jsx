"use client";

import React from "react";
import styles from "./Prices.module.scss";

const pricingData = [
  { service: "Výjezd a parkovné po Praze", price: "750 Kč" },
  { service: "Výjezd mimo Prahu", price: "750 Kč + 18 Kč/km" },
  { service: "Zabouchnuté dveře obyčejné", price: "od 550 Kč" },
  { service: "Zabouchnuté dveře bezpečnostní", price: "od 950 Kč" },
  { service: "Zamčené dveře obyčejné", price: "od 1400 Kč" },
  { service: "Zamčené dveře s vložkou proti odvrtání", price: "od 1600 Kč" },
  { service: "Zamčené dveře s vložkou", price: "od 1000 Kč" },
  { service: "Zamčené dveře s přídavným zámkem", price: "od 890 Kč" },
  { service: "Zamčené dveře s přídavným bezpečnostním zámkem", price: "od 1100 Kč" },
  { service: "Montáž bezpečnostního kování", price: "od 890 Kč" },
  { service: "Odstranění vložky zámku bez klíče", price: "od 390 Kč" },
  { service: "Vyjmutí zalomeného klíče", price: "od 40 Kč" },
  { service: "Montáž a demontáž kování", price: "od 800 Kč" },
  { service: "Montáž a demontáž vložky", price: "od 600 Kč" },
  { service: "Montáž zadlabávacího zámku", price: "od 600 Kč" },
  { service: "Výjezd (kompenzace za odmítnutou práci)", price: "1000 Kč" },
  { service: "Mimopracovní příplatek (17:00–22:00)", price: "+50%" },
  { service: "Noční příplatek (22:00–7:00)", price: "+100%" },
  { service: "Práce o víkendu (sobota, neděle, svátky)", price: "+100%" },
];

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <h2 className={styles.heading}>Ceník služeb</h2>
      <table className={styles.table}>
        <tbody>
          {pricingData.map((item) => (
            <tr key={item.service}>
              <td className={styles.service}>{item.service}</td>
              <td className={styles.price}>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Pricing;
