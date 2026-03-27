 import './PlanetTable.css';

 function PlanetTable() {
    return (
        <section className="planet-table">
                <div className="table-text">
                    <h2>Planetary Facts at a Glance</h2> 
                    <p>Below is a comparative table of major planets in our solar system. The data highlights key physical properties used by astronomers and researchers worldwide.</p>
                </div>
                <table>
                    <caption>Data about the planets of our solar system (Planetary facts taken from NASA)</caption>
                    <thead>
                        <tr>
                            <th colSpan="2"></th>
                            <th>Name</th>
                            <th>Mass (10 24kg)</th>
                            <th>Diameter (km)</th>
                            <th>Density (kg/m3)</th>
                            <th>Gravity(m/s2)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan="5" colSpan="2" className="planet-data"><span>Terrestrial Planets</span></td>
                        </tr>
                        <tr>
                            <td>Mercury</td>
                            <td>0.330</td>
                            <td>4,878</td>
                            <td>5427</td>
                            <td>3.7</td>
                        </tr> 
                        <tr>
                            <td>Venus</td>
                            <td>0.330</td>
                            <td>4,878</td>
                            <td>5427</td>
                            <td>3.7</td>
                        </tr> 
                    <tr>
                            <td>Earth</td>
                            <td>0.330</td>
                            <td>4,878</td>
                            <td>5427</td>
                            <td>3.7</td>
                        </tr> 
                        <tr>
                            <td>Mars</td>
                            <td>0.330</td>
                            <td>4,878</td>
                            <td>5427</td>
                            <td>3.7</td>
                        </tr> 
                        <tr>
                            <td rowSpan="7" className="planet-data"><span>Jovian planets</span></td>
                        </tr>
                        <tr>
                            <td rowSpan="3" className="planet-data"><span>Gas Giants</span></td>
                        </tr>
                        <tr>
                            <td>Jupiter</td>
                            <td>0.330</td>
                            <td>4,878</td>
                            <td>5427</td>
                            <td>3.7</td>
                        </tr>
                        <tr>
                        <td>Saturn</td>
                            <td>0.330</td>
                            <td>4,878</td>
                            <td>5427</td>
                            <td>3.7</td>
                        </tr>
                        <tr>
                            <td rowSpan="3" className="planet-data"><span>Ice Giants</span></td>
                        </tr>
                        <tr>
                            <td>Uranus</td>
                            <td>0.330</td>
                            <td>4,878</td>
                            <td>5427</td>
                            <td>3.7</td>
                        </tr>
                        <tr>
                            <td>Neptune</td>
                            <td>0.330</td>
                            <td>4,878</td>
                            <td>5427</td>
                            <td>3.7</td>
                        </tr>
                        <tr>
                            <td colSpan="2" rowSpan="2" className="planet-data"><span>Dwarf Planets</span></td>
                        </tr>
                        <tr>
                            <td>Pluto</td>
                            <td>0.330</td>
                            <td>4,878</td>
                            <td>5427</td>
                            <td>3.7</td>
                        </tr>
                    </tbody>
                </table>
        </section>

    );
}

export default PlanetTable;