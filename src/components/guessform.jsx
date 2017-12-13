import React from 'react';

// or export function GuessForm(props) {}  // no render() needed; just return 
  
export default class GuessForm extends React.PureComponent { 
  state = {
    userInput: ''
  }

  setInputValue(userInput) {
    this.setState({userInput})
  }

  userSubmit = event => { 
    event.preventDefault()
    const userInput = parseInt(this.state.userInput, 0); 
    this.props.onInput(userInput);
    this.setState({userInput: ''}); 
  }

  userInputChange = event => {
    this.setState({userInput: event.target.value});
  }

  render() {
    return ( 
      <form className="guessForm" onSubmit={(event)=> this.userSubmit(event)} style={styles.guessForm}>
        <input type="text" name="userInput" className="guessInput" style={styles.guessInput} 
          onChange={this.userInputChange} value={this.state.userInput} />   
        <button type="submit" id="submit" style={styles.submitBtn}>Submit</button>
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
    border: '1px solid black',
    borderRadius: 3,
    cursor: 'pointer',
    padding: 7
  }
}
