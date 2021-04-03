// import React from 'react';
import GamePage from '../Pages/GamePage'
import React, { useState } from 'react';
import './Lobby.scss';
const fetch = require('node-fetch');


 class Lobby extends React.Component{
   constructor(props){
     super(props);

     this.state = {
      isPlaying: false,
   
     }
     this.startGame = this.startGame.bind(this);
   }

  startGame() {

    console.log('START GAME');
    this.setState({isPlaying: true});
  }

  render(){

    return (
     
        this.state.isPlaying ? 
          <div className="container">
           <div className="vertical-center">
                <div><GamePage questions={this.state.questions}/></div> 
           </div>
          </div>
        : 
        <div className="container">
            <div className="vertical-center">
               <button className = "Lobby__PlayButton"onClick={() => this.startGame()}>PLAY DA TING!</button>
            </div>
        </div>
    );
  }
}





/*
  Potential State that Lobby and Game Component

  isPlaying: Boolean
  questions: []
  numberRight: 0
  numberWrong: 0
  currentChoice : null

  Functions in Lobby:

  -- handleAnswer
    Check if we are at the end of the array
    Updates the current Choice in state
    compare currentChoice to api answer, update numberWrong or numberRight
    Shift
    (Needs to be passed down to GamePage)

  -- endGame
    Display the user Results
    isPlaying to false

  -- startGame
    isPlaying to true
    Send An Api Request to
*/

export default Lobby