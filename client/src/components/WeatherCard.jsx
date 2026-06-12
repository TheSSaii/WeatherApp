import { weatherCardStyles } from "../styles/weatherCardStyles";

function WeatherCard({ weather }) {
  if (!weather) return null;

  const temperature =
    Math.round(weather.main.temp);

  const feelsLike =
    Math.round(weather.main.feels_like);

  const condition =
    weather.weather[0].description;

  const country =
  weather.sys?.country;

  const visibility =
    weather.visibility
      ? weather.visibility / 1000
      : "N/A";

  return (
    <div className={weatherCardStyles.container}>
      <p className={weatherCardStyles.sectionLabel}>
        Current Conditions
      </p>

      <h2 className={weatherCardStyles.city}>
        {weather.name}
      </h2>

      <p className={weatherCardStyles.country}>
        {country}
      </p>

      <div className={weatherCardStyles.content}>
        <p className={weatherCardStyles.temperature}>
          {temperature}°
        </p>

        <p className={weatherCardStyles.condition}>
          {condition}
        </p>

        <p className={weatherCardStyles.feelsLike}>
          Feels Like {feelsLike}°
        </p>
      </div>

      <div className={weatherCardStyles.footer}>
        <p className={weatherCardStyles.footerText}>
          Visibility: {visibility} km
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;