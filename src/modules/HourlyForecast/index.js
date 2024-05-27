"use client";

import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import styles from "./HourlyForecast.module.css";
import { fetchData, url } from "../../api/api";
import { getUserCoordinates } from "@/components/GetUserCoordinates";
import { formatDateTime } from "@/components/FormatDateTime";

const {
  hourlyForecast,
  hourly,
  tittle,
  hourlyContent,
  tittleHigh,
  imgLi,
  textoLi,
  listItem,
  ulHourly,
} = styles;

const HourlyForecast = () => {
  const [hourlyForecastData, setHourlyForecastData] = useState([]);
  const [error, setError] = useState(null);
  const [timeZone, setTimeZone] = useState("");

  useEffect(() => {
    const handleWeatherData = (data) => {
      setHourlyForecastData(data.list);
    };

    getUserCoordinates()
      .then(({ lat, lon }) => {
        if (lat !== null && lon !== null) {
          // Get the timezone based on the user's coordinates
          const tz = moment.tz.guess();
          setTimeZone(tz);
          fetchData(url.forecast(lat, lon), handleWeatherData);
        }
      })
      .catch((error) => {
        setError("Failed to get user coordinates: " + error.message);
      });
  }, []);

  return (
    <section className={hourlyForecast} id="hourlyForecast">
      <p className={tittle}>Próximas Horas</p>
      {error && <p>{error}</p>}
      <ul className={ulHourly}>
        {hourlyForecastData.slice(0, 8).map((item, index) => {
          const { formattedTime, formattedDate } = formatDateTime(
            item.dt,
            timeZone,
          );
          return (
            <li key={index} className={listItem}>
              <div className={hourly}>
                <div className={hourlyContent}>
                  <p className={tittleHigh}>{formattedDate}</p>
                  <p className={tittleHigh}>{formattedTime}</p>
                  <img
                    className={imgLi}
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt={item.weather[0].description}
                  />
                  <p className={textoLi}>{Math.round(item.main.temp)}°C</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HourlyForecast;
