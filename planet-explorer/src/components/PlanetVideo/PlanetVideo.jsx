import './PlanetVideo.css';

function PlanetVideo(){
  return (
    <section className="planet-video">
           <div className="planet-video-content">
             <div className="video-container">
                <video controls loop muted width="1920" height="1080" poster="https://res.cloudinary.com/dgn3mlotu/image/upload/v1769982633/planet_poster_tki4ng.png">
                    <source src="https://res.cloudinary.com/dgn3mlotu/video/upload/v1769982669/planet_video_clahzr.mp4" type="video/mp4"/>
                    <p>Your browser does not support this video.</p>
                </video>
            </div>
            <div className="video-text">
                <h2>How Planetary Data Helps Us Understand Space</h2>
                <p>Planetary science goes beyond images. Comparing <span>mass, diameter, gravity,</span> and <span>density</span>, we gain insight into how planets form, behave, and interact within the solar system.</p>
            </div>
           </div>
    </section> 
  );
}

export default PlanetVideo;