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
      <form onSubmit={this.handleSubmit}>
        <label for="SubmitAGuess">Enter a Number:</label>
          <input type="text" name="guess-a-number" placeholder="Enter a Guess"/>   
        <button type="submit" id="submit">Submit</button>
      </form>
    )
  }
}

const style = {
  
}