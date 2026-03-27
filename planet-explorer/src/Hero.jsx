import React from "react";
import "./Hero.css";

function Hero() {
return (
<>
{/* Header */}
<header className="ader">
<div className="navbar">
<a href="/">
<img
src="https://res.cloudinary.com/dzzl28aef/image/upload/v1770490245/planet_jhyuzs.png"
width="80"
height="50"
alt="logo"
/>
</a>
</div>
</header>

{/* Hero Section */}
<section className="head">
<div className="header">

<div className="header-content">
<h1>
Explore Our Solar <br /> System Through Data
</h1>

<p className="p">
Understand the planets not just by name, but by measurable facts.
From size and mass to gravity and density, this page breaks down
the solar system in a clear, data-driven way.
</p>

<div className="button">
<button className="btn btn-primary">
Explore the Data
</button>

<button className="btn btn-secondary">
Contact Us
</button>
</div>
</div>

<div className="header-image">
<img
src="https://res.cloudinary.com/dommpohcf/image/upload/v1773997666/headerpic_uzrbzd.png"
alt="Earth Globe"
/>
</div>

</div>
</section>
</>
);
}

export default Hero;
