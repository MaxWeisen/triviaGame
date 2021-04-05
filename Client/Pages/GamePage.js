import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import redlip from './redLip.mp3';
import ReactDOM from 'react-dom';

class GamePage extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			questions: [],
			numberRight: 0,
			numberWrong: 0,
			currentChoice: null,
			currentQuestion: 0,
			score: 0,
			showScore: false
		}

		this.parseAndPopulate = this.parseAndPopulate.bind(this);
		this.handleAnswerOptionClick = this.handleAnswerOptionClick.bind(this);

	}





parseAndPopulate(apiArray){

	// Converts HTML Entities into proper Symbols
	function unescapeHtml(safe) {
		return safe.replace(/&amp;/g, '&')
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/&quot;/g, '"')
			.replace(/&#039;/g, "'")
      .replace(/&rdquo;/g, "'");
	  }

	// Converts the Array received from the api into a new Array of formatted Question Objects
	return apiArray.results.map( questionObject => {
        // Empty object that will be the new formatted Question Object in the new array
		const newQuestion = {};

		// Add the Question text property on the new object
		newQuestion.questionText = unescapeHtml(questionObject.question);

		// Build up an array of the answers to the question and store under the 'answerOptions' key
		newQuestion.answerOptions = [];

		newQuestion.answerOptions.push(
			{ answerText: unescapeHtml(questionObject['correct_answer']), isCorrect: true }
		)

		newQuestion.answerOptions.push(
			...questionObject['incorrect_answers'].map(incorrectAns => ({ answerText: unescapeHtml(incorrectAns) , isCorrect: false }))
		)

		// Sort the Answers array so that the correct answer isnt the first pick every time
		newQuestion.answerOptions = newQuestion.answerOptions.sort(function() { return 0.5 - Math.random() });
			//copyright CLIFF CODEZ
		return newQuestion;
	});
}





	componentDidMount() {
		// const triviaQuestions = parseAndPopulate(this.tryIt)
		//fetch to /api (set in webpack config as a proxy localhost3000)
		fetch('/api')
		.then(data =>{
			return data.json();
		})
		.then(data => {
      console.log(this.parseAndPopulate(data))
			this.setState({questions: this.parseAndPopulate(data)

			})
		})
		.catch(err => console.log(err))
	}


	handleAnswerOptionClick (isCorrect) {
		if (isCorrect === true) {
			this.setState({score: this.state.score + 1})
		}

		const nextQuestion = this.state.currentQuestion + 1;
		if (nextQuestion < this.state.questions.length) {
			this.setState({ currentQuestion: nextQuestion});
		} else {
			this.setState({ showScore: true });
		}
	};

 render(){
	 console.log(this.state.score);

	 if (this.state.questions.length === 0) return <div> </div>

	return (
		<div className='game'>
			 {this.state.showScore ? (
				<div className='score-section'>
					You scored {this.state.score} out of {this.state.questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {this.state.currentQuestion + 1}</span>/{this.state.questions.length}
						</div>
						<div className='question-text'>{this.state.questions[this.state.currentQuestion].questionText}</div>
					</div>
					<ReactAudioPlayer
							src={redlip}
							// autoPlay
							controls
						/>
					<div className='answer-section'>
						{this.state.questions[this.state.currentQuestion].answerOptions.map((answerOption, i) => (
							<button key={i + 'button'} onClick={() => this.handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
   )}


}

export default GamePage
