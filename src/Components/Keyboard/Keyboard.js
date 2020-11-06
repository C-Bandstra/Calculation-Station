import React from 'react';
import './Keyboard.css';

const Keyboard = ({ 
  clearResult,
  updateShadow,
  currentSequence,
  storeResult,
  calculate,
  allClear,
  storeKey,
  updateCalculations, }) => {

  const evaluate = async () => {
    let result = calculate();
    let updatedCalculations = await storeResult(result, currentSequence);
    updateCalculations(updatedCalculations.calculations);
  }

  const grabKey = (e) => {
    e.preventDefault();
    return e.target.innerText;
  }

  const handleNumber = async (e) => {
    let key = grabKey(e);
    clearResult();
    await storeKey(key);
    var regex = /\d/g;
    shadowTest(regex);
  }

  const handleSymbol = (e) => {
    let key = grabKey(e);
    storeKey(key, true);
  }

  const shadowTest = (regex) => {
    let stringedSequence = currentSequence.toString();
    if(stringedSequence.includes('(') && !stringedSequence.includes((')'))) {
      return currentSequence;
    }

    if(regex.test(currentSequence)) {
      let result = calculate();
      updateShadow(result);
    }
  }

  return(
    <div className="keyboard">
      <section className="key-row row-1">
        <button onClick={() => allClear()} className="key"> AC </button>
        <button onClick={(event) => handleSymbol(event)} className="key"> ( </button>
        <button onClick={(event) => handleSymbol(event)} className="key"> ) </button>
        <button onClick={(event) => handleSymbol(event)} className="key"> ÷ </button>
      </section>

      <section className="key-row row-2">
        <button onClick={(event) => handleNumber(event)} className="key"> 7 </button>
        <button onClick={(event) => handleNumber(event)} className="key"> 8 </button>
        <button onClick={(event) => handleNumber(event)} className="key"> 9 </button>
        <button onClick={(event) => handleSymbol(event)} className="key"> x </button>
      </section>

      <section className="key-row row-3">
        <button onClick={(event) => handleNumber(event)} className="key "> 4 </button>
        <button onClick={(event) => handleNumber(event)} className="key"> 5 </button>
        <button onClick={(event) => handleNumber(event)} className="key"> 6 </button>
        <button onClick={(event) => handleSymbol(event)} className="key"> - </button>
      </section>

      <section className="key-row row-4">
        <button onClick={(event) => handleNumber(event)} className="key "> 1 </button>
        <button onClick={(event) => handleNumber(event)} className="key"> 2 </button>
        <button onClick={(event) => handleNumber(event)} className="key"> 3 </button>
        <button onClick={(event) => handleSymbol(event)} className="key"> + </button>
      </section>

      <section className="key-row row-5">
        <button onClick={(event) => handleNumber(event)} className="key zero-key"> 0 </button>
        <button onClick={(event) => handleSymbol(event)} className="key"> . </button>
        <button onClick={() => {evaluate()}} className="key"> = </button>
      </section>
    </div>
  )
}

export default Keyboard;