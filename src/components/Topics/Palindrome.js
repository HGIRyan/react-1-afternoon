import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: ""
    };
  }
  handleChange(value) {
    this.setState({ userInput: value });
  }
  palindrome(userInput){
    var forwards = userInput;
    var backwards = userInput;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');

    if(forwards === backwards){
        this.setState({palindrome: 'True'})
    }else {
        this.setState({palindrome: 'False'})
    }
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button className="confirmationButton" onClick={()=> this.palindrome(this.state.userInput)}>Filter</button>
        <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
      </div>
    );
  }
}
export default Palindrome;
