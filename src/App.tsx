import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputText from './components/elements/InputText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This site is under construction
        </p>
        <input type="text" name="netto" value="0,00" />
        <input type="text" name="hours" value="1" />
        <InputText>test</InputText>
      </header>
    </div>
  );
}

export default App;
