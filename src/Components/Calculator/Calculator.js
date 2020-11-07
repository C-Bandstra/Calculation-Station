//CALCULATION ERROR OCCURS WHEN INPUTING 2 OR MORE SIMILAR OPERATORS IN ONE SEQUENCE,
//THIS IS BECAUSE THE INDEXOF() IS FINDING THE FIRST CHARACTER MATCHING INSTEAD OF BOTH
//Ref: Line 61

import React, { Component } from 'react';
import './Calculator.css';
import Keyboard from "../Keyboard/Keyboard";
import ResultScreen from "../ResultScreen/ResultScreen";
import { addCalculation } from '../../apiCalls';

const Parser = require('expr-eval').Parser;

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSequence: '',
      result: '',
      shadowResult: '',
    }
  }

  allClear = () => {
    this.setState({
      currentSequence: '',
      result: '',
      shadowResult: '',
    })
  }

  beautifyResult = (result) => {
    result = result.toFixed(3);
    result = result % 1 === 0 ? Math.trunc(result) : result;
    return result;
  }

  beautifySequence = (sequence) => {
    const beautifiedSequence = sequence.split('').join(' ');
    return beautifiedSequence;
  }

  calculate = () => {
    let sequence = this.state.currentSequence
    sequence = this.replaceChar(sequence, 'x', '*');
    sequence = this.replaceChar(sequence, '÷', '/');
    let result = Parser.evaluate(sequence);
    if(result == 'Infinity') {
      result = 0;
    }
    result = this.beautifyResult(result);
    return result;
  }

  clearResult = () => {
    this.setState({
      result: '',
    })
  }

  replaceChar = (sequence, oldChar, newChar) => {
    if(sequence.indexOf(oldChar)) {
      let index = sequence.indexOf(oldChar);
      let input = sequence.split('');
      input[index] = newChar;
      return input.join('');
    }
  }

  sendCalculation = async (result, sequence) => {
    sequence = this.beautifySequence(sequence);
    const calculation = `${sequence} = ${result}`;
    const calculations = await addCalculation(calculation);
    return calculations;
  }

  storeKey = (clickedKey, symbol) => {
    let currentState = this.state.currentSequence;
    let updatedState = this.checkSequence(currentState, clickedKey, symbol);
    this.setState({
      currentSequence: updatedState,
    })
  }

  checkSequence = (currentState, clickedKey, symbol) => {
    if(symbol || this.state.result !== this.state.currentSequence) {
      return currentState += clickedKey;
    } else {
      return clickedKey;
    }
  }

  storeResult = (result, sequence) => {
    this.setState({
      currentSequence: result,
      result: result
    })
    const calculations = this.sendCalculation(result, sequence);
    this.clearResult()
    return calculations;
  }

  updateShadow = (shadowResult) => {
    this.setState({
      shadowResult: shadowResult
    })
  }

  render() {
    return (
      <div className="calculator">
        <ResultScreen shadowResult={this.state.shadowResult} result={this.state.result} currentSequence={this.state.currentSequence} />
        <Keyboard updateCalculations={this.props.updateCalculations} clearResult={this.clearResult} updateShadow={this.updateShadow} currentSequence={this.state.currentSequence} storeResult={this.storeResult} calculate={this.calculate} allClear={this.allClear} storeKey={this.storeKey} />
      </div>
    )
  }
}

export default Calculator;