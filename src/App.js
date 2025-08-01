import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";

function App() {
  const [games] = useState([
    {
      id: 1,
      sport: "Football",
      venue: "Main Ground",
      date: "2025-08-02",
      time: "5:00 PM",
      playersNeeded: 6,
    },
    {
      id: 2,
      sport: "Basketball",
      venue: "Court 1",
      date: "2025-08-03",
      time: "6:30 PM",
      playersNeeded: 4,
    },
    {
      id: 3,
      sport: "Cricket",
      venue: "East Field",
      date: "2025-08-04",
      time: "3:00 PM",
      playersNeeded: 10,
    },
  ]);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "#000" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        options={{
          background: { color: { value: "#000000" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 2,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, padding: "2rem", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>🎮 College Sports Meetup</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "0.5rem" }}>
          Organize, invite, and join your favorite college games!
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          padding: "2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {games.map((game) => (
          <div
            key={game.id}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              borderRadius: "1rem",
              padding: "1.5rem",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", color: "#FFD700", marginBottom: "0.5rem" }}>🏅 {game.sport}</h2>
            <p><strong>📍 Venue:</strong> {game.venue}</p>
            <p><strong>📆 Date:</strong> {game.date}</p>
            <p><strong>⏰ Time:</strong> {game.time}</p>
            <p><strong>🧑‍🤝‍🧑 Players Needed:</strong> {game.playersNeeded}</p>
            <button
              style={{
                marginTop: "1rem",
                background: "linear-gradient(to right, #ff416c, #ff4b2b)",
                border: "none",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "9999px",
                fontWeight: "bold",
                cursor: "pointer",
                width: "100%",
              }}
            >
              🚀 Join Game
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;