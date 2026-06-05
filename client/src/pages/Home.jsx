import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";

import { useWeather } from "../hooks/useWeather";

function Home() {
  const {
    weather,
    loading,
    error,
    searchWeather,
  } = useWeather();

  return (
    <div>
      <h1>Weather App</h1>

      <SearchBar onSearch={searchWeather} />

      {loading && <LoadingSpinner />}

      {error && (
        <ErrorMessage message={error} />
      )}

      {weather && (
        <WeatherCard weather={weather} />
      )}
    </div>
  );
}

export default Home;