import { useState } from "react";
import { getWeather } from "../services/weatherService";

export function useWeather() {
  const [weather, setWeather] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function searchWeather(
    city,
    country
  ) {
    try {
      setLoading(true);
      setError("");

      const data =
        await getWeather(
          city,
          country
        );

      setWeather(data);
    } catch (err) {
      console.error(err);

      setError("City not found");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  return {
    weather,
    loading,
    error,
    searchWeather,
  };
}