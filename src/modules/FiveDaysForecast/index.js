"use client";

import React, { useState, useEffect } from "react";
import { fetchData, url } from "../../api/api";
import styles from "./FiveDaysForecast.module.css";
import { getUserCoordinates } from "@/components/GetUserCoordinates";

const { forecast, tittle, listItem, imgLi, tempMinMax, weekday, dateString } =
  styles;

const FiveDaysForecast = () => {
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleWeatherData = (data) => {
      const groupedData = groupForecastsByDay(data.list);
      setForecastData(groupedData);
    };

    getUserCoordinates()
      .then(({ lat, lon }) => {
        if (lat !== null && lon !== null) {
          fetchData(url.forecast(lat, lon), handleWeatherData);
        }
      })
      .catch((error) => {
        setError("Failed to get user coordinates.");
      });
  }, []);

  const groupForecastsByDay = (list) => {
    const days = {};

    list.forEach((item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      const weekday = new Date(item.dt * 1000).toLocaleDateString("pt-BR", {
        weekday: "long",
      });

      if (!days[date]) {
        days[date] = {
          date,
          weekday: weekday,
          temps: [],
          icon: item.weather[0].icon,
          description: item.weather[0].description,
        };
      }

      days[date].temps.push(
        Math.floor(item.main.temp_min),
        Math.floor(item.main.temp_max),
      );
    });

    return Object.values(days)
      .map((day) => ({
        ...day,
        temps: day.temps || [], // Ensure temps is an array
      }))
      .slice(1, 6); // Only take the first 5 days
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <section className={forecast}>
        <p className={tittle}>Próximos 5 Dias</p>
        <ul>
          {forecastData.map((day, index) => (
            <li key={index} className={listItem}>
              {console.log(day)}
              <div className={tempMinMax}>
                <img
                  className={imgLi}
                  src={`https://openweathermap.org/img/wn/${day.icon}.png`}
                  alt={day.description}
                  loading="lazy"
                />
                <div>
                  <p>{Math.max(...day.temps)}°C</p>
                  <p>{Math.min(...day.temps)}°C</p>
                </div>
              </div>

              <p className={dateString}>{day.date}</p>
              <p className={weekday}>{day.weekday}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default FiveDaysForecast;
