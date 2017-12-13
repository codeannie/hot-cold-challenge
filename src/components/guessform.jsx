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
        <input type="text" name="guessNumber" className="guessInput" style={styles.guessInput} placeholder="enter a number"/>   
        <button type="submit" id="submit" className="submitBtn" style={styles.submitBtn}>Submit</button>
      </form>
    )
  }
}

const styles = {
  guessForm: {
    display: 'block',
    margin: '0 auto'
  },
  guessInput: {
    textAlign: 'center',
    height: 'auto',
    width: 300,
    marginBottom: 10,
    fontSize: 20,
    border: 'none',
    borderBottom: '2px solid #bbbebf'
  },
  submitBtn: {
    display: 'block',
    margin: '0 auto',
    fontSize: 14,
    width: 100, 
    border: 0,
    border: '1px solid black',
    borderRadius: 3,
    cursor: 'pointer',
    padding: 7
  }
}