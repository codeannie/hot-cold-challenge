import React from 'react';

// export default class ShowGuesses extends React.Component { 

export const ShowGuesses = props => 
  <div className="inputContainer" style={styles.inputContainer}>
      <ul className="guessList" style={styles.guessList}>
        <li className="guess"> </li>
      </ul>
    </div>;


const styles = {
  inputContainer: {
    backgroundColor: 'blue',
    border: 'red',
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

// how to manage the array...? 