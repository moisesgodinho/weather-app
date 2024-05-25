import Header from "@/modules/Header";
import styles from "./page.module.css";
import Container from "@/modules/Container";
import CurrentWeather from "@/modules/CurrentWeather";
import HourlyForecast from "@/modules/HourlyForecast";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Container>
        <CurrentWeather />
        <HourlyForecast />
      </Container>
    </main>
  );
}
