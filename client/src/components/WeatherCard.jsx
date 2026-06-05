function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div>
      <h2>{weather.name}</h2>

      <p>
        Temperature: {weather.main.temp} °C
      </p>

      <p>
        Condition: {weather.weather[0].description}
      </p>
    </div>
  );
}

export default WeatherCard;