import React, { Component, useEffect, useState } from "react";
import ReactDOM from 'react-dom';


function App(){
  // const [testA, setTestA] = usePlusOne(3);
  const testA = usePlusOne(3);

        return(
          <div data-testid='appDiv'>
            yoooo BABY yeayyuihh
          <p data-testid='p1'> I am a p tag </p>
          <p data-testid='p2'> {testA} </p>
          <button data-testid='b1' onKeyDown = {() => console.log('keyboard click')} onClick = {() => console.log('mouse click')}> Am I accessible </button>
          <button data-testid='b2' onClick = {() => console.log('mouse click')}> I fail keyboard test </button>
          <button data-testid='b3' onClick = {testFetch}> Test Fetch </button>
        </div>
        )
}

function usePlusOne(value) {
  const [newValue, setNewValue] = useState(null);
  
  setNewValue(newValue+1)

  return newValue; 
}

const testFetch = () => {
  fetch('http://localhost:3001/test')
    .then(response => response.json())
    .then(data => console.log(data));
}

export default App;
