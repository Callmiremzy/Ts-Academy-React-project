 import './PlanetTable.css';

 function PlanetTable() {
    return (
        <section class="facts-section">
      <div class="facts-container">
        <h2>Planetary Facts at a Glance</h2>
        <p class="intro">
          Below is a comparative table of major planets in our solar system. The
          data highlights key physical properties used by astronomers and
          researchers worldwide.
        </p>

        <p class="note">
          <strong>Data about the planets of our solar system</strong>
          (Planetary facts taken from NASA)
        </p>

        <div class="table-wrapper">
          <table class="facts-table">
            <thead>
              <tr>
                <th colspan="2"></th>
                <th>Name</th>
                <th>Mass (10²⁴kg)</th>
                <th>Diameter (km)</th>
                <th>Density (kg/m³)</th>
                <th>Gravity (m/s²)</th>
              </tr>
            </thead>

            <tbody>
                
              <tr>
                <td class="group" colspan="2" rowspan="4">
                  Terrestrial Planets
                </td>
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
                <td class="group" rowspan="4">Jovian Planets</td>
                <td class="subgroup" rowspan="2">Gas Giants</td>
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
                <td class="subgroup" rowspan="2">Ice Giants</td>
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
                <td class="group" colspan="2">Dwarf Planets</td>
                <td>Pluto</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    );
}

export default PlanetTable;