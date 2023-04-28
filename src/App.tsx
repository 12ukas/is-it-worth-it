import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './elements/Input';

function App() {
  const [nettoEarnings, setNettoEarnings] = useState<number>(0.00);
  const [workingHours, setworkingHours] = useState<number>(40);

  const calculate = (nettoEarnings: number, workingHours: number) => {
    if (nettoEarnings > 0 && workingHours > 0) {
      const result = nettoEarnings / workingHours;
      return result.toFixed(2);
    }

    return "";
  }
  const result = calculate(nettoEarnings, workingHours);

  return (
    <div className="App">
      <header className="App-header">
        <p>
        Is the upcoming workload worth it or should you rather hire external? <br />
        Enter your net earnings and the number of hours required for the project.
        </p>
        <section>
          <Input id="netto-earnings" value={nettoEarnings} setter={setNettoEarnings} step="any"/>
          <label htmlFor="netto-earnings">€</label>
          <br />
          <Input id="working-hours" value={workingHours} setter={setworkingHours} step="1"/>
          <label htmlFor="netto">hrs</label>

          {result.trim() !== "" ? <p>The project will cost you {result} € per hour</p> : <p>&nbsp;</p>}
        </section>
      </header>
    </div>
  );
}

export default App;
