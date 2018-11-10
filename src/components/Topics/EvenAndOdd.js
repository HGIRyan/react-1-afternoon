import React, { Component } from "react";


class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }
  handleChange(value){
    this.setState({userInput:value})
  }
  assignEvenAndOdds(value){
     let arr = value.split(',');
     let allNumbers=[];
     let Evens = [];
     let Odds = [];
     for(let i = 0;i<arr.length;i++){
         let int=parseInt(arr[i]);
         allNumbers.push(int);
     }
     arr = [...allNumbers];
     for(let i=0;i<arr.length;i++){
         if(arr[i]%2===0){
             Evens.push(arr[i])
         }else {
             Odds.push(arr[i])
         }
     }
     this.setState({evenArray:Evens, oddArray:Odds})
  }
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button className="confirmationButton" onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
        <span className="resultsBox">
          {" "}
          Evens {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          {" "}
          Odds {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}
export default EvenAndOdd;
