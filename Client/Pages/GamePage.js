import React, { useState } from 'react';


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


	// Convert the Array from the api request to a different array of question objects
	return apiArray.results.map( questionObject => {
		const newQuestion = {};

		newQuestion.questionText = unescapeHtml(questionObject.question);
		newQuestion.answerOptions = Object.keys(questionObject).reduce((answArr, key) => {
            if (key === 'correct_answer') {
               answArr.push(
				{ answerText: unescapeHtml(questionObject[key]), isCorrect: true }
			   )
			}
			else if (key === 'incorrect_answers'){
				answArr.push(
					...questionObject[key].map(incorrectAns => ({ answerText: unescapeHtml(incorrectAns) , isCorrect: false }))
				)
			}

			return answArr;
		},[]);

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
	 
	 if (this.state.questions.length === 0) return <div>NOTHING HERE</div>

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
