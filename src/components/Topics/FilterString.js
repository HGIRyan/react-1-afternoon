import React, { Component } from "react";

export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
        unfilteredArray:['Hello', 'I Hate somethings', 'Hi', 'Why not'],
        userInput: '',
        filteredArray: [],
    };
}
        handleChange(value){
            this.setState({userInput: value})
        }
        filteredArray(userInput){
            let filter = this.state.unfilteredArray;
            let filtered = [];
            for(let i = 0; i<filter.length; i++){
                if(filter[i].includes(userInput)){
                    filtered.push(filter[i]);
                }
            }
            this.setState({filteredArray: filtered})
        }
  render() {
    return (
      <div className='puzzleBox filterStringPB'>
      <h4>Filter String</h4>
      <span className='puzzleText'>Strings: { JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
      <input className='inputLine' onChange={(e)=>this.handleChange(e.target.value)}></input>
      <button className='confirmationButton' onClick={()=>this.filteredArray(this.state.userInput)} >Im Gay</button>
      <span className='resultsBox filterStringRB'>Filtered Strings: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
      </div>
    );
  }
}
