import React, { useState, useEffect } from "react";
import "./planetgrid.css";

// Planet data using public folder images
const planetsData = [
 
    { name: "Mercury", distanceFromSun: "57.9 million km", image: "/image/images.jpg" },
  { name: "Venus", distanceFromSun: "108.2 million km", image: "/image/venus.png" },
  { name: "Earth", distanceFromSun: "149.6 million km", image: "/image/earth_fudrrb.png" },
  { name: "Mars", distanceFromSun: "227.9 million km", image: "/image/mars_h141j5.png" },
  { name: "Jupiter", distanceFromSun: "778.6 million km", image: "/image/jupiter_ehb8m6.png" },
  { name: "Saturn", distanceFromSun: "1433.5 million km", image: "/image/saturn_qdund0.png" },
  { name: "Uranus", distanceFromSun: "2872.5 million km", image: "/image/uranus_w4pg28.png" },
  { name: "Neptune", distanceFromSun: "4495.1 million km", image: "/image/nenptune_iryneu.png" },
  { name: "Pluto", distanceFromSun: "5906.4 million km", image: "/image/nenptune_iryneu.png" },

];

const PlanetGrid = () => {
  const [visiblePlanets, setVisiblePlanets] = useState(planetsData);

  // Handle mobile view (show only 8 planets if screen <= 600px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setVisiblePlanets(planetsData.slice(0, 8));
      } else {
        setVisiblePlanets(planetsData);
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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
          {visiblePlanets.map((planet, index) => (
            <div className={`planet-card ${planet.name === "Pluto" ? "pluto" : ""}`} key={index}>
              <img
                src={planet.image}
                alt={planet.name}
                loading="lazy"
                onLoad={(e) => e.target.classList.add("loaded")}
                onError={(e) => {
                  e.target.src = "/images/placeholder.png"; // fallback if missing
                  e.target.classList.add("loaded");
                }}
              />
              <div className="planet-info">
                <h5>{planet.name}</h5>
                <p>Distance from Sun: {planet.distanceFromSun}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanetGrid;