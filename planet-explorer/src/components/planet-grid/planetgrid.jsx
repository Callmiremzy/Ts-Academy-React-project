import React, { useEffect, useState } from "react";

const VisualizationSection = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data);
      })
      .catch((err) => console.error("Error fetching planets:", err));
  }, []);

  return (
    <section className="visualization-section">
      <div className="container">

        {/* Header */}
        <div className="visualization-header">
          <h2>Visualizing the Differences Between Planets</h2>
          <p>
            Each planet in our solar system has unique physical characteristics.
            Visual comparisons help highlight how vastly different terrestrial
            planets are from gas giants and ice giants.
          </p>
        </div>

        {/* Planet Grid */}
        <div className="planet-grid">
          {planets.map((planet, index) => (
            <div key={index} className="planet-card">
              <img src={planet.image} alt={planet.name} />
              <div className="planet-info">
                <h5>{planet.name}</h5>
                <p>{planet.distance_from_sun}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VisualizationSection;