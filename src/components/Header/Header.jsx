import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <p className={styles.logo}>WeatherApp</p>

        <div className={styles.search}>
          <input className={styles.inputCidade} placeholder="Procurar cidade" />
          <button className={styles.botaoBusca}>
            <img
              className={styles.imgBusca}
              src="https://www.svgrepo.com/show/488200/find.svg"
              alt="pesquisar"
            />
          </button>
        </div>

        <button className={styles.botaoCurrentLocation}>
          <img
            className={styles.imgCurrentLocation}
            src="https://img.icons8.com/ios-filled/50/center-direction.png"
            alt="Localização Atual"
          />
          <p>Localização Atual</p>
        </button>
      </header>
    </>
  );
}

export default Header;
