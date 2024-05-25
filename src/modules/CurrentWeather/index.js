import styles from "./CurrentWeather.module.css";

const {
  currentWeather,
  tittle,
  climaNow,
  temperatura,
  graus,
  imgPrevisao,
  textoPrevisao,
  cidade,
} = styles;

const CurrentWeather = () => {
  return (
    <>
      <section className={currentWeather} id="currentWeather">
        <p className={tittle}>Agora</p>
        <div className={climaNow} id="climaNow">
          <p className={temperatura}>30</p>
          <p className={graus}>°C</p>
          <img
            className={imgPrevisao}
            src="https://wind-y.vercel.app/assets/img/weather-icons/04d.png"
            alt="icon-tempo"
          />
        </div>
        <p className={textoPrevisao}>Chuva demais</p>

        <p className={cidade}>Barão de Cocais</p>
      </section>
    </>
  );
};

export default CurrentWeather;
