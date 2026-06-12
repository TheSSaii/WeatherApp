import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 3000,
  OPENWEATHER_API_KEY:
    process.env.OPENWEATHER_API_KEY,
};