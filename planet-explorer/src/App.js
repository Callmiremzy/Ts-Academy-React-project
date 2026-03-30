
import './App.css';
import PlanetVideo from './components/PlanetVideo/PlanetVideo';
import PlanetTable from './components/PlanetTable/PlanetTable';
import ContactForm from './components/contact-form/ContactForm';  
import Hero from './components/hero-section/Hero';
import Footer from './components/footer-folder/footer';
import VisualizationSection from './components/planet-grid/planetgrid';

function App() {
  return (
    <>
      <Hero />
     <PlanetVideo />
     <VisualizationSection /> 
     <PlanetTable />
     <ContactForm />
      <Footer />
    </>    
  );
}

export default App;