//CALCULATION ERROR OCCURS WHEN INPUTING MULTIPLE OPERATORS IN ONE SEQUENCE,
//THIS IS BECAUSE THE INDEXOF() IS FINDING THE FIRST CHARACTER MATCHING INSTEAD OF BOTH



import React, { Component } from 'react';
import './Calculator.css';
import Keyboard from "../Keyboard/Keyboard"
import ResultScreen from "../ResultScreen/ResultScreen"

const Parser = require('expr-eval').Parser;

class Calculator extends Component {
  constructor() {
    super();
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
    result = result.toFixed(3)
    result = result % 1 === 0 ? Math.trunc(result) : result
    return result
  }

  calculate = () => {
    let sequence = this.state.currentSequence
    sequence = this.replaceChar(sequence, 'x', '*')
    sequence = this.replaceChar(sequence, '÷', '/')
    let result = Parser.evaluate(sequence)
    result = this.beautifyResult(result)
    return result
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
      return input.join("")
    }
  }

  storeKey = (clickedKey) => {
    let currentState = this.state.currentSequence
    let updatedState = currentState += clickedKey
    this.setState({
      currentSequence: updatedState
    })
  }

  storeResult = (result) => {
    this.setState({
      currentSequence: result,
      result: result
    })
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
        <Keyboard clearResult={this.clearResult} updateShadow={this.updateShadow} currentSequence={this.state.currentSequence} storeResult={this.storeResult} calculate={this.calculate} allClear={this.allClear} storeKey={this.storeKey} />
      </div>
    )
  }
}

export default Calculator