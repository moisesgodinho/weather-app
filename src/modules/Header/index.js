"use client";

import { getUserCoordinates } from "@/components/GetUserCoordinates";

import styles from "./Header.module.css";
import { useState } from "react";
import { searchCityWeather } from "@/components/searchCityWeather";

const {
  header,
  logo,
  search,
  inputCidade,
  botaoBusca,
  imgBusca,
  currentLocalization,
  localizationCurrent,
} = styles;

function Header() {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    setError(null);
    searchCityWeather(city, (weatherData) => {
      if (!weatherData) {
        setError("Failed to fetch weather data.");
        return;
      }
      console.log("Current Weather Data:", weatherData);
      // Process and display weatherData as needed
    }).catch((err) => {
      setError("Error fetching weather data.");
      console.error(err);
    });
  };


  return (
    
    <header id="header" className={header}>
      <p className={logo}>GodinhoClima{console.log(city)}</p>

      <div id="search" className={search}>
        <input className={inputCidade} placeholder="Procurar cidade" onChange={handleCityChange} />
        <button className={botaoBusca} onClick={handleSearch}>
          <img
            className={imgBusca}
            src="https://www.svgrepo.com/show/488200/find.svg"
            alt="pesquisar"
          />
        </button>
      </div>

      <button className={currentLocalization} onClick={getUserCoordinates}>
        <img
          className={localizationCurrent}
          src="https://img.icons8.com/ios-filled/50/center-direction.png"
          alt="center-direction"
        />
        <p>Localização Atual</p>
      </button>
    </header>
  );
}

export default Header;
