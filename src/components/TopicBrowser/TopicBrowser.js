import React, { Component } from "react";
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';
import BlackDiamond from '../Topics/BlackDiamond'

class TopicBrowser extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div>
        <p>Hello World</p>
        <EvenAndOdd/>
        <FilterObject/>
        <FilterString/>
        <Palindrome/>
        <Sum/>
        <BlackDiamond/>
      </div>
    );
  }
}
export default TopicBrowser;
