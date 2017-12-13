import React from 'react';

const ShowGuesses = props => {
  return (
    <div className="inputContainer" style={styles.inputContainer}>
      <ul className="guessList" style={styles.guessList}>
        {props.guessList.map((guess, index) => (
          <li key={index} className="guess">{guess}</li>
        ))}
      </ul>
    </div>
  )
}

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

export default ShowGuesses;