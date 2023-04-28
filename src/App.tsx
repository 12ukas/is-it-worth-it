import React, { useState } from 'react';
import styled from "styled-components";

import './App.css';
import Input from './elements/Input';


const MinimumCostsResult = styled.span`
  text-decoration: underline;
  font-weight: bold;
  font-size: xx-large;
  color: red;
`;

const HourlyWageResult = styled.span`
  text-decoration: underline;
  font-weight: bold;
  font-size: xx-large;
  color: green;
`;


function App() {
  const [nettoEarnings, setNettoEarnings] = useState<number>(0);
  const [workingHoursDaily, setWorkingHoursDaily] = useState<number>(8);
  const [projectDurationHours, setProjectDurationHours] = useState<number>(0);

  const calculateMinimumCosts = (projectDurationHours: number, hourlyWageResult: number) => {
    if (projectDurationHours <= 0 || hourlyWageResult <= 0) return 0;

    const result = projectDurationHours * hourlyWageResult;

    return parseFloat(result.toFixed(2));
  }

  const calculateHourlyWage = (workingHoursDaily: number, nettoEarnings: number) => {
    if (nettoEarnings <= 0 || workingHoursDaily <= 0) return 0;

    const result = nettoEarnings / calculateMonthlyWorkingHours(workingHoursDaily);

    return parseFloat(result.toFixed(2));
  }

  const calculateMonthlyWorkingHours = (workingHoursDaily: number) => {
    if (workingHoursDaily <= 0) return 0;

    const daysPerWeek = 5;
    const weeksPerMonth = 4;

    return workingHoursDaily * daysPerWeek * weeksPerMonth;
  }

  const hourlyWageResult = calculateHourlyWage(workingHoursDaily, nettoEarnings);
  const minimumCostsResult = calculateMinimumCosts(projectDurationHours, hourlyWageResult);

  return (
    <div className="App">
      <header className="App-header">
        <p>
        Is the upcoming workload worth it or should you rather hire external? <br />
        Enter your net earnings and the number of hours required for the project.
        </p>

        <section>
          <Input id="netto-earnings" value={nettoEarnings} setter={setNettoEarnings} step="0.01" label="Net earnings per month"/>
          {/* <label htmlFor="netto-earnings">€</label> */}

          <Input id="working-hours" value={workingHoursDaily} setter={setWorkingHoursDaily} step="1" label="Daily working time"/>
          {/* <label htmlFor="working-hours">working hours daily</label> */}

          <Input id="project-hours" value={projectDurationHours} setter={setProjectDurationHours} step="1" label="Project length in hours"/>
          {/* <label htmlFor="netto">needed project hours</label> */}
        </section>

        <section>
          {hourlyWageResult > 0 ? <p>You earn <HourlyWageResult>{hourlyWageResult}</HourlyWageResult> € per hour.</p> : <p>&nbsp;</p>}
          {minimumCostsResult > 0 ? <p>If the external costs in total more than <MinimumCostsResult>~{minimumCostsResult}</MinimumCostsResult> €, you should consider doing it yourself. Otherwise hire an external!</p> : <p>&nbsp;</p>}
        </section>
      </header>
    </div>
  );
}

export default App;
