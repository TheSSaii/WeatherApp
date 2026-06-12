import { metricsGridStyles } from "../styles/metricsGridStyles";

function MetricsGrid({ weather }) {
  if (!weather) return null;

  const humidity =
    weather.main.humidity;

  const pressure =
    weather.main.pressure;

  const visibility =
    weather.visibility
      ? weather.visibility / 1000
      : "N/A";

  const windSpeed =
    weather.wind.speed;

  return (
    <div className={metricsGridStyles.container}>
      <h3 className={metricsGridStyles.sectionTitle}>
        Operational Metrics
      </h3>

      <div className={metricsGridStyles.grid}>
        <MetricCard
          title="Humidity"
          value={humidity}
          unit="%"
        />

        <MetricCard
          title="Wind"
          value={windSpeed}
          unit="m/s"
        />

        <MetricCard
          title="Pressure"
          value={pressure}
          unit="hPa"
        />

        <MetricCard
          title="Visibility"
          value={visibility}
          unit="km"
        />
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  unit,
}) {
  return (
    <div className={metricsGridStyles.card}>
      <p className={metricsGridStyles.title}>
        {title}
      </p>

      <p className={metricsGridStyles.value}>
        {value}
      </p>

      <p className={metricsGridStyles.unit}>
        {unit}
      </p>
    </div>
  );
}

export default MetricsGrid;