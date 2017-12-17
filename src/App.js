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

    const guessDiff = Math.abs(target - guess);
    let feedback;

    if(guess === target) {
      this.setState({
        gameWon: true,
        feedback: 'Congrats, you guessed the correct number!'
      });
      return;

      } else if ( guessDiff  >= 50) {
        feedback = 'Brrr, it\'s so cold';
      } else if ( guessDiff  >= 30) {
        feedback = 'It\'s still cold';
      } else if ( guessDiff >= 20) {
        feedback = 'It\'s only a little cold';
      } else if ( guessDiff >= 15) {
        feedback = 'Woah, it got warm just now';
      } else if ( guessDiff >= 10) {
        feedback = 'It\'s getting warmer in here';
      } else if ( guessDiff  >= 5) {
        feedback = 'Ahh, getting closer to the sun!';
      } else if ( guessDiff  >= 1) {
        feedback = 'Get the ice cubes! It\'s hot in here';
      }

      this.setState({
        feedback,
        guesses:[...this.state.guesses, guess]
      },
      // this will be called right after setState is done
      () => console.log('check state->', this.state)
      )
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

        <p className="feedback">{feedback}</p>

        <GuessForm onInput={guess => this.handleGuess(guess)}/>  
        
        <ShowGuesses guessList={guesses} /> 

      </div>
    );
  }
}

const styles = {
  button: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10,
    fontSize: 14,
    width: 100, 
    border: '1px solid green',
    borderRadius: 3,
    cursor: 'pointer',
    padding: 7
  }
}