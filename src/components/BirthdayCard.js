// src/components/BirthdayCard.js
import React from "react";
import "./BirthdayCard.css";

export default function BirthdayCard({ onClose }) {
  return (
    <div className="card-overlay" role="dialog" aria-modal="true">
      <div className="card">
        <button className="card-close" onClick={onClose} aria-label="Close card">
          ✕
        </button>
        <div className="card-inner">
          <h3>To Soham,</h3>
          <p>
            Remember to always keep your spirit of lightness and joy. 
            Ups and downs are part of life, but your positive outlook makes all the difference in how 
            we live through it. May your chi shine through everything!
            To the sunshine of our house, happy birthday, little one!
          </p>
          <p> 
            May your year be filled with laughter, creativity, and sweet memories.
            Keep shining bright!
          </p>
          <p className="card-signoff">— Jiji</p>
        </div>
      </div>
    </div>
  );
}
