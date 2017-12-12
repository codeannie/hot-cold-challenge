import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GuessForm from './components/guessform';
import showGuesses from './components/showGuesses';
import generateNumber from './components/generateNumber';

export default class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        targetNumber: 0,
        guesses: [],
        feedback: '',
    }
  }

    guessForm() {
      // this.setState = {
    }

    generateNumber() {
      this.setState = {targetNumber: generateNumber()}
    }

    }

  render() {
    // render vs return?

    return (
      <div className="App">
        <header className="Hot-Cold-Game">
          <h1 className="App-title">Hot & Cold Game</h1>
        </header>

        <p className="game-intro">
          Guess the number between 1 and 100!
        </p>

        <GuessForm />  

      </div>
    );
  }
}

