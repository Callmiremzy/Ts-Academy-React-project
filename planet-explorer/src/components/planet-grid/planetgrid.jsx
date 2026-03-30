import React, { useState, useEffect } from "react";
import "./planetgrid.css";

// Planet data with external images
const planetsData = [
  {
    name: "Mercury",
    distanceFromSun: "57.9 million km",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2V_OYPfyKxa1UgMs_pGJRnhtvXkGENpKwZA&s",
  },
  {
    name: "Venus",
    distanceFromSun: "108.2 million km",
    image:
      "https://res.cloudinary.com/dzzl28aef/image/upload/v1770214899/venus_rwinx8.png",
  },
  {
    name: "Earth",
    distanceFromSun: "149.6 million km",
    image:
      "https://res.cloudinary.com/dzzl28aef/image/upload/v1770212389/earth_fudrrb.png",
  },
  {
    name: "Mars",
    distanceFromSun: "227.9 million km",
    image:
      "https://res.cloudinary.com/dzzl28aef/image/upload/v1770212377/mars_h141j5.png",
  },
  {
    name: "Jupiter",
    distanceFromSun: "778.6 million km",
    image:
      "https://res.cloudinary.com/dzzl28aef/image/upload/v1770212356/Jupiter_ehb8m6.png",
  },
  {
    name: "Saturn",
    distanceFromSun: "1433.5 million km",
    image:
      "https://res.cloudinary.com/dzzl28aef/image/upload/v1770212348/Saturn_qdund0.png",
  },
  {
    name: "Uranus",
    distanceFromSun: "2872.5 million km",
    image:
      "https://res.cloudinary.com/dzzl28aef/image/upload/v1770212358/uranus_w4pg28.png",
  },
  {
    name: "Neptune",
    distanceFromSun: "4495.1 million km",
    image:
      "https://res.cloudinary.com/dzzl28aef/image/upload/v1770212351/nenptune_iryneu.png",
  },
  {
    name: "Pluto",
    distanceFromSun: "5906.4 million km",
    image:
      "https://res.cloudinary.com/dzzl28aef/image/upload/v1770212351/nenptune_iryneu.png",
  },
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
            <div
              className={`planet-card ${
                planet.name === "Pluto" ? "pluto" : ""
              }`}
              key={index}
            >
              <img
                src={planet.image}
                alt={planet.name}
                loading="lazy"
                onLoad={(e) => e.target.classList.add("loaded")}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150";
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