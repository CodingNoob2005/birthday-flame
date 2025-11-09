// src/App.js
import React, { useEffect, useState } from "react";
import Cake from "./components/Cake";
import Confetti from "./components/Confetti";
import BirthdayCard from "./components/BirthdayCard";
import "./App.css";

function App() {
  const [isLit, setIsLit] = useState(true);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const startMic = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioContext = new AudioContext();
        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        const data = new Uint8Array(analyser.frequencyBinCount);
        source.connect(analyser);

        const detectBlow = () => {
          analyser.getByteFrequencyData(data);
          const volume = data.reduce((a, b) => a + b) / data.length;
          if (volume > 80 && isLit) { // tweak threshold
            setIsLit(false);
            stream.getTracks().forEach(t => t.stop());
          }
          if (isLit) requestAnimationFrame(detectBlow);
        };

        detectBlow();
      } catch (err) {
        console.error("Mic access denied:", err);
      }
    };

    startMic();
  }, [isLit]);

  useEffect(() => {
    if (isLit) setShowCard(false);
  }, [isLit]);

  return (
    <div className="App">
      {!isLit && <Confetti />}
      <h1>🎉 Soso,blow Out The Candle! 🎂</h1>
      <Cake isLit={isLit} />
      {!isLit && <h2>🎈 Happy Birthday, Soham! 🎈</h2>}
      {!isLit && (
        <>
          <button
            className="card-cta"
            onClick={() => setShowCard(true)}
            type="button"
          >
            <span className="cta-text">Click me</span>
            <span className="cta-arrow">➜</span>
          </button>
          {showCard && (
            <BirthdayCard onClose={() => setShowCard(false)} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
