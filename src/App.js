import React, { Component } from 'react';
import './App.css';

import GuessForm from './components/guessform';
import ShowGuesses from './components/showGuesses';
import targetNum from './components/generateNumber';

export default class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        targetNumber: targetNum(),
        gameWon: false,
        guesses: [],
        feedback: '',
    }
  }
  
  newGame() {
    this.setState({
      targetNumber: targetNum(), 
      gameWon: false,
      guesses: [],
      feedback: '',
    })
    console.log('new game started!');
  }

  handleGuess(guess) {
    if(this.state.gameWon) {
      return;
    }

    let target = this.state.targetNumber;

    guess = parseInt(guess, 10);

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

      this.setState({
        feedback,
        guesses:[...this.state.guesses, guess]
      });
  
    }

  render() {
    const { guesses, feedback} = this.state;

    return (
      <div className="App">
        <header className="App-Header">
          <button className="new-game-btn" style={styles.button} onClick={(e)=>this.newGame()}>New Game</button>
          <h1 className="App-title">Hot & Cold Game</h1>
        </header>

        <p className="game-intro">
          Guess the number between 1 and 100!
        </p>

        <p className="feedback">{this.state.feedback}</p>

        <GuessForm onInput={guess => this.handleGuess(guess)}/>  
        
        <ShowGuesses guessList={this.state.guesses} /> 

      </div>
    );
  }
}

const styles = {
  button: {
    marginTop: 10,
    fontSize: 14,
    width: 100, 
    border: '1px solid green',
    borderRadius: 3,
    cursor: 'pointer',
    padding: 7
  }
}