import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import MetricsGrid from "../components/MetricsGrid";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";
import OperationalAssessment from "../components/OperationalAssessment";
import IntelligencePanel from "../components/IntelligencePanel";

import { useWeather } from "../hooks/useWeather";

function Home() {
  const {
    weather,
    loading,
    error,
    searchWeather,
  } = useWeather();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-4xl mx-auto">

        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold">
            Weather Intelligence
          </h1>

          <p className="text-slate-400 mt-2">
            Operational Weather Assessment
          </p>
        </header>

        <div className="mb-8">
          <SearchBar onSearch={searchWeather} />
        </div>

        {loading && <LoadingSpinner />}

        {error && (
          <ErrorMessage message={error} />
        )}

        {weather && (
          <div className="space-y-6">
            <WeatherCard weather={weather} />

            <MetricsGrid weather={weather} />
            <IntelligencePanel weather={weather} />
          </div>
        )}

        
      </div>
    </div>
  );
}

export default Home;