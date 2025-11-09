// src/components/Cake.js
import React from "react";
import Flame from "./Flame";
import "./Cake.css";

export default function Cake({ isLit }) {
  return (
    <div className="cake-container">
      <div className="cake-body">
        <div className="cake-tier cake-tier--top">
          <div className="cake-topper">
            <div className="tier-cap"></div>
            <div className="candle-single">
              <div className="candle-body">
                <div className="candle-stripe candle-stripe--left"></div>
                <div className="candle-stripe candle-stripe--right"></div>
              </div>
              <div className="wick"></div>
              <Flame isLit={isLit} />
            </div>
          </div>
          <div className="tier-frosting">
            {Array.from({ length: 6 }).map((_, idx) => (
              <span key={`top-swirl-${idx}`} className="frosting-swirl" />
            ))}
          </div>
        </div>
        <div className="cake-tier cake-tier--middle">
          <div className="tier-frosting">
            {Array.from({ length: 9 }).map((_, idx) => (
              <span key={`mid-swirl-${idx}`} className="frosting-swirl" />
            ))}
          </div>
        </div>
        <div className="cake-tier cake-tier--bottom">
          <div className="tier-frosting">
            {Array.from({ length: 12 }).map((_, idx) => (
              <span key={`bottom-swirl-${idx}`} className="frosting-swirl" />
            ))}
          </div>
        </div>
      </div>
      <div className="cake-plate"></div>
    </div>
  );
}
