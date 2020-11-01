import React from 'react';
import Calculator from "../Calculator/Calculator"
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Calculator saveToStorage={this.saveToStorage}/>
    </div>
  );
}

export default App;
