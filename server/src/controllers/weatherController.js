import {
  getWeatherByCity,
} from "../services/weatherService.js";

export async function getWeather(
  req,
  res,
  next
) {
  try {
    const { city, country } = req.query;

    if (!city || !country) {
      return res.status(400).json({
        message:
          "City and country are required",
      });
    }

    const weather =
      await getWeatherByCity(
        city,
        country
      );

    return res.json(weather);
  } catch (error) {
    next(error);
  }
}