import React from 'react';

// or export function GuessForm(props) {}  // no render() needed; just return 
  
export default class GuessForm extends React.PureComponent { 
  handleSubmit = event => {  //vs handleSubmit(e) => {}?
    event.preventDefault()
    const userInput = event.target.elements.guessNumber.value 
    //this.inputNode.value
  }

  // ref={node => this.inputNode = node} ?
  render() {
    return ( 
      <form className="guessForm" onSubmit={this.handleSubmit} style={styles.guessForm}>
        <label for="SubmitAGuess" className="guessLabel" style={styles.guessLabel}>Enter a Number:</label>
          <input type="text" name="guessNumber" className="guessInput" style={styles.guessInput} placeholder="Enter a Guess"/>   
        <button type="submit" id="submit" className="submitBtn" style={styles.submitBtn}>Submit</button>
      </form>
    )
  }
}

const styles = {
  guessForm: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  guessLabel: {
    display: 'block',
    textAlign: 'center'
  },
  guessInput: {
    height: 'auto',
    fontSize: 20,
    border: 'none',
    borderBottom: '2px solid red'
  },
  submitBtn: {
    border: 0,
    borderRadius: 3,
    cursor: 'pointer',
    padding: 7
  }
}