
import './App.css';
import PlanetVideo from './components/PlanetVideo/PlanetVideo';
import PlanetTable from './components/PlanetTable/PlanetTable';
import ContactForm from './ContactForm';  

function App() {
  return (
    <div className="App">
      <PlanetVideo />
      <PlanetTable />
      <ContactForm />
    </div>  
  );
}

export default App;