import styles from "./HourlyForecast.module.css";

const {
  hourlyForecast,
  hourly,
  tittle,
  hourlyContent,
  tittleHigh,
  imgLi,
  textoLi,
} = styles;

const HourlyForecast = () => {
  return (
    <>
      <section className={hourlyForecast} id="hourlyForecast">
        <p className={tittle}>Próximas Horas</p>
        <div className={hourly}>
          <div className={hourlyContent}>
            <p className={tittleHigh}>15:00</p>
            <img
              className={imgLi}
              src="https://wind-y.vercel.app/assets/img/weather-icons/04d.png"
            />
            <p className={textoLi}>25°C</p>
          </div>
          <div className={hourlyContent}>
            <p className={tittleHigh}>15:00</p>
            <img
              className={imgLi}
              src="https://wind-y.vercel.app/assets/img/weather-icons/04d.png"
            />
            <p className={textoLi}>25°C</p>
          </div>
          <div className={hourlyContent}>
            <p className={tittleHigh}>15:00</p>
            <img
              className={imgLi}
              src="https://wind-y.vercel.app/assets/img/weather-icons/04d.png"
            />
            <p className={textoLi}>25°C</p>
          </div>
          <div className={hourlyContent}>
            <p className={tittleHigh}>15:00</p>
            <img
              className={imgLi}
              src="https://wind-y.vercel.app/assets/img/weather-icons/04d.png"
            />
            <p className={textoLi}>25°C</p>
          </div>
          <div className={hourlyContent}>
            <p className={tittleHigh}>15:00</p>
            <img
              className={imgLi}
              src="https://wind-y.vercel.app/assets/img/weather-icons/04d.png"
            />
            <p className={textoLi}>25°C</p>
          </div>
          <div className={hourlyContent}>
            <p className={tittleHigh}>15:00</p>
            <img
              className={imgLi}
              src="https://wind-y.vercel.app/assets/img/weather-icons/04d.png"
            />
            <p className={textoLi}>25°C</p>
          </div>
          <div className={hourlyContent}>
            <p className={tittleHigh}>15:00</p>
            <img
              className={imgLi}
              src="https://wind-y.vercel.app/assets/img/weather-icons/04d.png"
            />
            <p className={textoLi}>25°C</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HourlyForecast;
