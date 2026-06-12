import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL;

export async function getWeather(
  city,
  country
) {
  try {
    const response = await axios.get(
      API_URL,
      {
        params: {
          city,
          country,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}