import { useState } from "react";
import OperationalAssessment from "./OperationalAssessment";

function IntelligencePanel({ weather }) {
  const [showOperational, setShowOperational] =
    useState(false);

  return (
    <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

      <button
        onClick={() =>
          setShowOperational(!showOperational)
        }
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-xl font-semibold">
          Operational Assessment
        </span>

        <span className="text-2xl">
          {showOperational ? "▼" : "▶"}
        </span>
      </button>

      {showOperational && (
        <div className="mt-6">
          <OperationalAssessment
            weather={weather}
          />
        </div>
      )}
    </div>
  );
}

export default IntelligencePanel;