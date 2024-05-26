"use client";

import { getUserCoordinates } from "@/api/api";
import styles from "./Header.module.css";

function Header() {
  return (
    <header id="header" className={styles.header}>
      <p className={styles.logo}>GodinhoClima</p>

      <div id="search" className={styles.search}>
        <input
          className={styles.inputCidade}
          id="inputCity"
          placeholder="Procurar cidade"
        />
        <button className={styles.botaoBusca}>
          <img
            className={styles.imgBusca}
            src="https://www.svgrepo.com/show/488200/find.svg"
            alt="pesquisar"
          />
        </button>
      </div>

      <button
        className={styles.currentLocalization}
        onClick={getUserCoordinates}
      >
        <img
          className={styles.localizationCurrent}
          src="https://img.icons8.com/ios-filled/50/center-direction.png"
          alt="center-direction"
        />
        <p>Localização Atual</p>
      </button>
    </header>
  );
}

export default Header;
