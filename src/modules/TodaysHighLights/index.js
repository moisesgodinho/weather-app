import styles from "./TodaysHighLights.module.css";

const {
  todaysHighlight,
  tittleHigh,
  highlightsView,
  airQuality,
  sunset,
  pressureAtm,
  visibility,
  humidity,
  feelsLike,
  imgHigh,
  textHigh,
  sol,
} = styles;

const TodaysHighLights = () => {
  return (
    <>
      <section className={todaysHighlight}>
        <div className={airQuality}>
          <p className={tittleHigh}>Qualidade do Ar</p>
          <div className={highlightsView}>
            <img src="./quality.svg" className={imgHigh} alt="" />
            <p className={textHigh}>Air Quality</p>
          </div>
        </div>

        <div className={sunset}>
          <p className={tittleHigh}>Nascer e Por do Sol</p>
          <div className={sol}>
            <div className={highlightsView}>
              <img src="./sunrise.svg" className={imgHigh} alt="" />
              <p className={textHigh}>06 : 19</p>
            </div>
            <div className={highlightsView}>
              <img src="./sunset.svg" className={imgHigh} alt="" />
              <p className={textHigh}>18 : 17</p>
            </div>
          </div>
        </div>

        <div className={pressureAtm}>
          <p className={tittleHigh}>Pressão Atmosferica</p>
          <div className={highlightsView}>
            <img src="./pressure.svg" className={imgHigh} alt="" />
            <p className={textHigh}>1 atm</p>
          </div>
        </div>

        <div className={visibility}>
          <p className={tittleHigh}>Visibilidade</p>
          <div className={highlightsView}>
            <img src="./visibility.svg" className={imgHigh} alt="" />
            <p className={textHigh}>10km</p>
          </div>
        </div>

        <div className={humidity}>
          <p className={tittleHigh}>Umidade</p>
          <div className={highlightsView}>
            <img src="./humidity.svg" className={imgHigh} alt="" />
            <p className={textHigh}>30%</p>
          </div>
        </div>

        <div className={feelsLike}>
          <p className={tittleHigh}>Sensação Térmica</p>
          <div className={highlightsView}>
            <img src="./thermostat.svg" className={imgHigh} alt="" />
            <p className={textHigh}>35°C</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodaysHighLights;
