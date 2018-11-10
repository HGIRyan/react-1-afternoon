import React, { Component } from "react";
export default class FilterObject extends Component{

  constructor() {
    super();
    this.state = {
      halo: [
        {
          name: "Master Chief (John-117",
          race: "Human(Spartan)",
          army: "UNSC",
          rank: "Master Chief Petty Officer",
          
        },
        {
          name: "Arbiter",
          race: "Sangheili",
          class: "Elite",
          sideArm: "Energy Sword"
        },
        {
          race: "Hunter",
          sideArm: "actual arm",
          strength: "strong",
          class: "tank",
          army: "covenent"
        }
      ],
      userInput: "",
      filterHalo: []
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }
  filterHalo(prop) {
    let halo = this.state.halo;
    let haloFilter = [];
    for (let i = 0; i < halo.length; i++) {
      if (halo[i].hasOwnProperty(prop)) {
        haloFilter.push(halo[i]);
      }
    }
    this.setState({ filterHalo: haloFilter });
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB2">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: { JSON.stringify(this.state.halo, null, 10) }
        </span>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={()=> this.filterHalo(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: { JSON.stringify(this.state.filterHalo, null, 10) }
        </span>
      </div>
    );
  }
}


