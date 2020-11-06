import React from 'react';
import './CalculationBoard.css';

const CalculationBoard = ({ currentState }) => {

  const displayCalculations = () => {

    return currentState.fetchedCalculations.map((sequence, i) => {
      return <p key={i} className="hi">{sequence}</p>
    })
  }

  return (
    <div className="calculation-board">
      {displayCalculations()}
    </div>
  )
}

export default CalculationBoard