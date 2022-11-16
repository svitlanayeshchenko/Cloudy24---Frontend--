import './Cards.css';
import CardScroller from './cardScroller/CardScroller';
import CardHistory from './cardHistory/CardHistory';
import React, { Component } from 'react';

class Cards extends Component {

  render() {
    return (
      <div className="cards">
        <CardScroller />
        <CardHistory />
      </div>
    );
  }
}

export default Cards;
