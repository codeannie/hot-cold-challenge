import React from 'react';

export const showGuesses = props => 
  <div className="inputContainer" style={styles.inputContainer}>
      <ul className="guessList" style={styles.guessList}>
        <li className="guess"> </li>
      </ul>
    </div>;


const styles = {
  inputContainer: {
    backgroundColor: 'blue'
  },
  guessList: {
    display: 'flex',
    listStyle: 'none'
  },
  guess: {
    border: '1px solid blue',
    fontSize: 12
  }
}