import { useState } from "react";
import { getWeather } from "../services/weatherService";

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchWeather(city, country) {
  console.log("useWeather -> searchWeather");

  try {
    setLoading(true);
    setError("");

    const data = await getWeather(city, country);

    console.log("API response:", data);

    setWeather(data);
  } catch (err) {
    console.error("API error:", err);

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