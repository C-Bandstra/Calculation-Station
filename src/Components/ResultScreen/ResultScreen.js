import React from 'react';
import './ResultScreen.css';

const ResultScreen = ({ shadowResult, result, currentSequence }) => {

  return (
    <div className="result-screen">
      <p  className={`input-display ${result ? "hidden" : ''}`}>{currentSequence}</p>
      <p  className={`shadow-result ${result ? "hidden" : ''}`}>{shadowResult}</p>
      <p  className={`result ${result ? '' : "hidden"}`}>{result}</p>
    </div>
  )
}

export default ResultScreen