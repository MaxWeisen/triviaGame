// import React from 'react';
import GamePage from '../Pages/GamePage'
import React, { useState } from 'react';
import './Lobby.scss';
const fetch = require('node-fetch');
import { Redirect } from 'react-router-dom';


 class Lobby extends React.Component{
   constructor(props){
     super(props);

     this.state = {
      isPlaying: false,
      category: "0",
      difficulty: "any",
      questionCount: "5",
      error: "",
      background: ""
     }
     this.startGame = this.startGame.bind(this);
   }






  onCategoryChange = (e) => {
      const category = e.target.value;
      this.setState({ category })
  }

  onDifficultyChange = (e) => {
      const difficulty = e.target.value;
      this.setState({ difficulty });
  }

  onCountChange = (e) => {
      const questionCount = e.target.value;
      this.setState({ questionCount });
  }
  submitForm = (e) => {
    e.preventDefault();
    const config = {
        room: this.state.room,
        category: this.state.category,
        difficulty: this.state.difficulty,
        questionCount: this.state.questionCount
    };
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


                  <div className="box-layout__box">

                <form className="form" onSubmit={this.submitForm}>
                    
                    
                    <select className="select" value={this.state.difficulty} onChange={this.onDifficultyChange}>
                        <option key={"any"} value={"any"}>Any Difficulty</option>
                        <option key="easy" value="easy">Easy</option>
                        <option key="medium" value="medium">Medium</option>
                        <option key="hard" value="hard">Hard</option>
                    </select>
                    <select className="select" value={this.state.questionCount} onChange={this.onCountChange}>
                        <option key="5" value="5">5 Questions</option>
                        <option key="10" value="10">10 Questions</option>
                        <option key="15" value="15">15 Questions</option>
                    </select>
                    <button className = "button" onClick={() => this.startGame()}>Play da ting!</button>
                </form>
          </div>
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




export default ( Lobby);
// export default Lobby