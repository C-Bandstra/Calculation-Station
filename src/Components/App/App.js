import React, { Component } from 'react';
import CalculationBoard from '../CalculationBoard/CalculationBoard';
import Calculator from "../Calculator/Calculator";
import { fetchCalculations } from '../../apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fetchedCalculations: [],
    }
  }
  
  componentDidMount = async () => {
    const calculations = await fetchCalculations();
    this.setState({
      fetchedCalculations: calculations,
    })
  }

  updateCalculations = (updatedCalculations) => {
    this.setState({
      fetchedCalculations: updatedCalculations.calculations,
    })
  }

  render() {
    return (
      <div className="App">
        <section className="components">
          <CalculationBoard currentState={this.state}/>
          <Calculator updateCalculations={this.updateCalculations}/>
        </section>
      </div>
    );
  }
}

export default App;
