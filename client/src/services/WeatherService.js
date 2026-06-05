import axios from "axios";

const API_URL =
  "http://localhost:3000/api/weather";

export async function getWeather(city, country) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        city,
        country,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}