import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GuessForm from './components/guessform';
import showGuesses from './components/showGuesses';
import getTargetNum from './components/generateNumber';
// import targetNumber from './components/generateNumber';

export default class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        targetNumber: 0,
        gameWon: false,
        guesses: [],
        feedback: 'Make a guess first!',
    }
  }
  
  newGame() {
    this.setState({
      targetNumber: 0,
      gameWon: false,
      guesses: [],
      feedback: 'Make a guess first!',
    })
  }
  handleGuess(guess) {
    // if(this.state.gameWon) {
    //   return;
    // }

    let target = getTargetNum();
    guess = parseInt(guess, 10);

    this.setState({
      feedback,
      guesses:[...this.state.guesses, guess]
    });

    if(isNaN(guess)) {
      this.setState({
        feedback: 'Please enter a valid number'
      });
      return;
    }

    let feedback; 
    if(guess === target) {
      this.setState({
        gameWon: true,
        feedback: 'Congrats, you guessed the correct number!'
      });
      return;
      } else if( guess >= 50) {
        feedback = 'Brrr, it\'s so cold';
      } else if (guess >= 30) {
        feedback = 'It\'s a little cold';
      } else if (guess >= 10) {
        feedback = 'Woah, it got warm just now';
      } else if (guess >= 5) {
        feedback = 'You\'re getting close to the sun!';
      } else if (guess >= 1) {
        feedback = 'Get the ice cubes! It\'s hot in here';
      }
    }

  render() {
    const { guesses, feedback} = this.state;

    return (
      <div className="App">
        <header className="App-Header">
          <h1 className="App-title">Hot & Cold Game</h1>
          <button className="new-game-btn">New Game</button>
        </header>

        <p className="game-intro">
          Guess the number between 1 and 100!
        </p>

        <GuessForm />  
        <showGuesses />

      </div>
    );
  }
}
