import React from 'react';

const ShowGuesses = props => {
  return (
    <div className="inputContainer" style={styles.inputContainer}>
      <ul className="guessList" style={styles.guessList}>
        {props.guessList.map((guess, index) => (
          <li key={index} className="guess" style={styles.guess}> {guess} </li>
        ))}
      </ul>
    </div>
  )
}

const styles = {
  inputContainer: {
    margin: '0 auto',
    marginTop: 10,
    width: 350,
  },
  guessList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'center',
    margin: 0,
    padding: 5,
    listStyle: 'none'
  },
  guess: {
    marginRight: 10,
    fontSize: 14
  }
}

export default ShowGuesses;