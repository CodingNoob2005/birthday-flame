// src/components/Confetti.js
import React, { useMemo } from "react";
import "./Confetti.css";

const colors = ["#ff6b6b", "#feca57", "#1dd1a1", "#54a0ff", "#f368e0"];

export default function Confetti() {
  const pieces = useMemo(() => {
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    return Array.from({ length: 40 }, (_, index) => ({
      id: index,
      color: colors[index % colors.length],
      left: randomInRange(0, 100),
      delay: randomInRange(0, 0.8),
      duration: randomInRange(2.5, 4.5),
      drift: randomInRange(-30, 30),
      angle: randomInRange(-45, 45),
    }));
  }, []);

  return (
    <div className="confetti-wrapper" aria-hidden="true">
      {pieces.map(({ id, color, left, delay, duration, drift, angle }) => (
        <span
          key={id}
          className="confetti-piece"
          style={{
            "--confetti-color": color,
            "--confetti-left": `${left}%`,
            "--confetti-delay": `${delay}s`,
            "--confetti-duration": `${duration}s`,
            "--confetti-drift": `${drift}px`,
            "--confetti-angle": `${angle}deg`,
          }}
        />
      ))}
    </div>
  );
}
