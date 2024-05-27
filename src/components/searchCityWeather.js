// import { fetchData, url } from "@/api/api";

// export const searchCityWeather = async (city, callback) => {
//   if (!city) return;

//   try {
//     // Fetch coordinates for the city
//     const geoUrl = url.geo(city);
//     const geoData = await fetchData(geoUrl, (data) => data[0]);
//     const { lat, lon } = geoData;

//     // Fetch current weather using coordinates
//     const weatherUrl = url.currentWeather(lat, lon);
//     fetchData(weatherUrl, callback);
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//   }
// };
// src/utils/searchCityWeather.js

import { fetchData, url } from "@/api/api";
export const searchCityWeather = async (city, callback) => {
  if (!city) return;

  try {
    // Fetch coordinates for the city
    const geoUrl = url.geo(city);
    const geoData = await fetchData(geoUrl, (data) => {
      console.log("Geocoding API response:", data[0]);
      return data[0];
    });

    // Check if geoData is valid
    if (!geoData || !geoData.lat || !geoData.lon) {
      throw new Error("Invalid location data");
    }

    const { lat, lon } = geoData;

    // Fetch current weather using coordinates
    const weatherUrl = url.currentWeather(lat, lon);
    fetchData(weatherUrl, callback);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};