"use client";

import React, { useEffect, useState } from "react";
import styles from "./CurrentWeather.module.css";
import { fetchData, url, getUserCoordinates } from "@/api/api";

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
  // Definir estados para armazenar dados do tempo
  const [temp, setTemp] = useState(0);
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    // Função de callback para processar os dados recebidos
    const handleWeatherData = (data) => {
      setTemp(data.main.temp);
      setDescription(data.weather[0].description);
      setIcon(data.weather[0].icon);
      setCity(data.name);
    };

    getUserCoordinates()
      .then(({ lat, lon }) => {
        if (lat !== null && lon !== null) {
          fetchData(url.currentWeather(lat, lon), handleWeatherData);
        }
      })
      .catch((error) => {
        setError("Failed to get user coordinates.");
      });
  }, []);

  return (
    <>
      <section className={currentWeather} id="currentWeather">
        <p className={tittle}>Agora</p>
        <div className={climaNow} id="climaNow">
          <p className={temperatura}>
            {temp !== null ? Math.floor(temp) : "Carregando..."}
          </p>
          <p className={graus}>°C</p>
          <img
            className={imgPrevisao}
            src={`https://openweathermap.org/img/wn/${icon}.png`}
            alt={description !== null ? description : "Carregando..."}
          />
        </div>
        <p className={textoPrevisao}>
          {description !== null ? description : "Carregando..."}
        </p>

        <p className={cidade}>{city !== null ? city : "Carregando..."}</p>
      </section>
    </>
  );
};

export default CurrentWeather;
