import React, { Component } from "react";
export default class EvenAndOdd extends Component {
    render(){
        return (
            <div className='puzzleBox blackDiamondPB'>
            <h4>What letter does your name start with?</h4>
            <input className='inputLine'></input>
            <button className='confirmationButton'>Lol</button>
            <span className='resultsBox'></span>
            </div>
        )
    }
}