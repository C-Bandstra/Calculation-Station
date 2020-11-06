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
    this.startLiveUpdate()
    const calculations = await fetchCalculations();
    this.startFetch(calculations)
  }

  startLiveUpdate = () => {
    setInterval(async () => {
      const calculations = await fetchCalculations()
      this.startFetch(calculations)
    }, 3000)
  }

  startFetch = (calculations) => {
    this.setState({
      fetchedCalculations: calculations,
    })
  }

  render() {
    return (
      <div className="App">
        <section className="components">
          <CalculationBoard currentState={this.state}/>
          <Calculator updateCalculations={this.startFetch}/>
        </section>
      </div>
    );
  }
}

export default App;
