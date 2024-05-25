import styles from "./FiveDaysForecast.module.css";

const { forecast, tittle, listItem, imgLi, tempMinMax } = styles;

const FiveDaysForecast = () => {
  return (
    <>
      <section className={forecast}>
        <p className={tittle}>Próximos 5 Dias</p>
        <ul>
          <li className={listItem}>
            <div className={tempMinMax}>
              <img
                className={imgLi}
                src="https://wind-y.vercel.app/assets/img/weather-icons/04d.png"
                loading="lazy"
              />
              <div>
                <p>21°C</p>
                <p>26°C</p>
              </div>
            </div>
            <p>25 de maio</p>
            <p>Domingo</p>
          </li>

          <li className={listItem}>
            <div className={tempMinMax}>
              <img
                className={imgLi}
                src="https://wind-y.vercel.app/assets/img/weather-icons/04d.png"
                loading="lazy"
              />
              <div>
                <p>21°C</p>
                <p>26°C</p>
              </div>
            </div>
            <p>25 de maio</p>
            <p>Domingo</p>
          </li>

          <li className={listItem}>
            <div className={tempMinMax}>
              <img
                className={imgLi}
                src="https://wind-y.vercel.app/assets/img/weather-icons/04d.png"
                loading="lazy"
              />
              <div>
                <p>21°C</p>
                <p>26°C</p>
              </div>
            </div>
            <p>25 de maio</p>
            <p>Domingo</p>
          </li>

          <li className={listItem}>
            <div className={tempMinMax}>
              <img
                className={imgLi}
                src="https://wind-y.vercel.app/assets/img/weather-icons/04d.png"
                loading="lazy"
              />
              <div>
                <p>21°C</p>
                <p>26°C</p>
              </div>
            </div>
            <p>25 de maio</p>
            <p>Domingo</p>
          </li>

          <li className={listItem}>
            <div className={tempMinMax}>
              <img
                className={imgLi}
                src="https://wind-y.vercel.app/assets/img/weather-icons/04d.png"
                loading="lazy"
              />
              <div>
                <p>21°C</p>
                <p>26°C</p>
              </div>
            </div>
            <p>25 de maio</p>
            <p>Domingo</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default FiveDaysForecast;
