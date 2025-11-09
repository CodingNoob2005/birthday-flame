// src/components/Flame.js
import React from "react";
import "./Flame.css";

const gustDelays = ["0s", "0.08s", "0.16s"];

export default function Flame({ isLit }) {
  const flameStateClass = isLit ? "flame--lit" : "flame--extinguish";

  return (
    <div className="flame-container" aria-hidden="true">
      <div className={`flame ${flameStateClass}`}>
        <div className="flame-core"></div>
      </div>
      {!isLit && (
        <div className="wind-gust" aria-hidden="true">
          {gustDelays.map((delay, idx) => (
            <span
              key={`gust-${idx}`}
              className="wind-line"
              style={{ "--gust-delay": delay }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
