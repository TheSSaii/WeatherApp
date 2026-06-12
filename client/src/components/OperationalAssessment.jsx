function OperationalAssessment({ weather }) {
  if (!weather) return null;

  const heatRisk = calculateHeatRisk(
    weather.main.feels_like,
    weather.main.humidity
  );

  const visibilityRisk =
    calculateVisibilityRisk(
      weather.visibility
    );

  const mobilityRisk =
    calculateMobilityRisk(
      weather.main.humidity,
      weather.wind.speed
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      <RiskCard
        title="Heat Risk"
        risk={heatRisk}
        description={getHeatAdvice(
          heatRisk
        )}
      />

      <RiskCard
        title="Visibility Risk"
        risk={visibilityRisk}
        description={getVisibilityAdvice(
          visibilityRisk
        )}
      />

      <RiskCard
        title="Mobility Risk"
        risk={mobilityRisk}
        description={getMobilityAdvice(
          mobilityRisk
        )}
      />

    </div>
  );
}

function RiskCard({
  title,
  risk,
  description,
}) {
  const riskStyle = {
    LOW: "text-green-400",
    MODERATE: "text-yellow-400",
    HIGH: "text-red-400",
  };

  return (
    <div className="bg-slate-800 rounded-2xl p-4">

      <p className="text-slate-400 text-sm uppercase">
        {title}
      </p>

      <p
        className={`text-2xl font-bold mt-2 ${riskStyle[risk]}`}
      >
        {risk}
      </p>

      <p className="text-slate-300 text-sm mt-3">
        {description}
      </p>

    </div>
  );
}

function calculateHeatRisk(
  feelsLike,
  humidity
) {
  if (
    feelsLike >= 38 ||
    humidity >= 90
  )
    return "HIGH";

  if (
    feelsLike >= 30 ||
    humidity >= 75
  )
    return "MODERATE";

  return "LOW";
}

function calculateVisibilityRisk(
  visibility
) {
  if (visibility < 1000)
    return "HIGH";

  if (visibility < 5000)
    return "MODERATE";

  return "LOW";
}

function calculateMobilityRisk(
  humidity,
  wind
) {
  if (
    humidity >= 90 &&
    wind >= 10
  )
    return "HIGH";

  if (
    humidity >= 75 ||
    wind >= 7
  )
    return "MODERATE";

  return "LOW";
}

function getHeatAdvice(risk) {
  switch (risk) {
    case "HIGH":
      return "High heat stress risk during prolonged activity.";

    case "MODERATE":
      return "Monitor hydration and rest cycles.";

    default:
      return "Conditions favorable for outdoor operations.";
  }
}

function getVisibilityAdvice(risk) {
  switch (risk) {
    case "HIGH":
      return "Reduced visual awareness and navigation capability.";

    case "MODERATE":
      return "Visibility may impact long-range observation.";

    default:
      return "Good visual operating conditions.";
  }
}

function getMobilityAdvice(risk) {
  switch (risk) {
    case "HIGH":
      return "Terrain movement may be significantly affected.";

    case "MODERATE":
      return "Monitor footing and vehicle mobility.";

    default:
      return "Terrain conditions appear favorable.";
  }
}

export default OperationalAssessment;