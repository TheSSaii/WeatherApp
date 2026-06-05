import axios from "axios";
import { env } from "../config/env.js";

export async function getWeatherByCity(
  city,
  country
) {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: `${city},${country}`,
        appid: env.OPENWEATHER_API_KEY,
        units: "metric",
      },
    }
  );

  return response.data;
}