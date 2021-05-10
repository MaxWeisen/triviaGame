import React, { Component, useState } from "react";
import ReactDOM from 'react-dom';
import Login from '../Components/Login';
// import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Lobby from "../Pages/Lobby.js";
import Signup from '../Components/SignUp';


function App(){
  const [testA, setTestA] = useState(true);

        return(
          <div className = 'appDiv'>
            yoooo
          <p> I am a p tag </p>
          <p> {testA} </p>
          <button onKeyDown = {() => console.log('keyboard click')} onClick = {() => console.log('mouse click')}> Am I accessible </button>
          <button onClick = {() => console.log('mouse click')}> I fail keyboard test </button>
          <button onClick = {testFetch}> Test Fetch </button>
        </div>
        )
}

const testFetch = () => {
  fetch('http://localhost:3000/test')
    .then(response => response.json())
    .then(data => console.log(data));
}

ReactDOM.render(<App />, document.getElementById('app'))
