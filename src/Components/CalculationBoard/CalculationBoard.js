import React from 'react';
import './CalculationBoard.css';

const CalculationBoard = ({ currentState }) => {

  const displayCalculations = () => {
    return currentState.fetchedCalculations.map((sequence, i) => {
      return (
        <div key={i} className="calc-box">
          <p className="calculation">{sequence}</p>
        </div>
      )
    })
  }

  return (
    <div className="calculation-board">
      {displayCalculations()}
    </div>
  )
}

export default CalculationBoard