
import './App.css';
import PlanetVideo from './components/PlanetVideo/PlanetVideo';
import PlanetTable from './components/PlanetTable/PlanetTable';
import ContactForm from './ContactForm';  
import Hero from './Hero';
import Footer from './footer-folder/footer';

function App() {
  return (
    <>
      <Hero />
     <PlanetVideo />
     <PlanetTable />
     <ContactForm />
      <Footer />
    </>    
  );
}

export default App;