import Header from "@/modules/Header";
import styles from "./page.module.css";
import Container from "@/modules/Container";
import CurrentWeather from "@/modules/CurrentWeather";
import HourlyForecast from "@/modules/HourlyForecast";
import FiveDaysForecast from "@/modules/FiveDaysForecast";
import TodaysHighLights from "@/modules/TodaysHighLights";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Container>
        <CurrentWeather />
        <FiveDaysForecast />
        <HourlyForecast />
        <TodaysHighLights />
      </Container>
    </main>
  );
}
