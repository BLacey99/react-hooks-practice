import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Counter() {
  const [counter, setCounter] = useState(1);

  //counter == get, setCounter == set, useState == default value
  
  let [doubler, setDoubler] = useState(counter);
 
  function calculate(){
    (function add(){
      setCounter(counter+1);
    }());
  
    (function double(){
      setDoubler(doubler = 2 + counter * 2);
    }());
  }


  return <div>
  <p>{counter}</p>
  <p>{doubler}</p>
  <button onClick={calculate}>Increment</button>
  </div>;
}

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);