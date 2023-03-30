import './SmallCardScroller.css';
import master_card from './master_card.png';
import React, { Component } from 'react';

class SmallCardScroller extends Component {

  cards = [];
  index = 0;
  currentCard = {};

  constructor(props) {
    super(props);
    this.cards = props.cards;
    this.setter = props.setter;
    this.index = 0;
    this.clickNext = this.clickNext.bind(this);
    this.clickPrevious = this.clickPrevious.bind(this);
    this.render = this.render.bind(this);
    this.cardInputChanged = this.cardInputChanged.bind(this);
  }

  cardInputChanged(e) {
    this.currentCard.number = e.target.value.replace(/\s+/g, '');
    this.setter(this.currentCard);
  }

  clickNext() {
    this.index++;
    this.forceUpdate();
  }

  clickPrevious() {
    this.index--;
    this.forceUpdate();
  }

  render() {
    if (this.index >= this.cards.length) {
      this.index = this.cards.length - 1;
    }

    if (this.index < 0) {
      this.index = 0;
    }

    if (this.cards.length === 0) {
      this.currentCard = {};
    } else {
      this.currentCard = this.cards[this.index];
    }

    this.setter(this.currentCard);

    if ("custom" in this.currentCard) {
      return (
        <div className="small-card-scroller">
          <div><input className="prev but-prev" type="button" value="&lt;" onClick={this.clickPrevious} /></div>
          <div className="card-scroller-info">
            <div className="card-info-icon">
              <div className="icon-mastercard">
                <img src={master_card} alt="master_card" className="master_card master_card-size" />
              </div>
            </div>
            <div className="card-info-right">
              <div className="card-right-number">
                <div className="material-icons transfers-icons">credit_card</div>
                <input type="text" id="number" name="number" placeholder="Номер картки" onChange={this.cardInputChanged} required />
              </div>
            </div>
          </div>
          <div>
            <input className="next but-next" type="button" value="&gt;" onClick={this.clickNext} /></div>

        </div>
      );
    }

    return (
      <div className="small-card-scroller">
        <div><input className="prev but-prev" type="button" value="&lt;" onClick={this.clickPrevious} /></div>
        <div className="card-scroller-info">
          <div className="card-info-icon">
            <div className="icon-mastercard">
              <img src={master_card} alt="master_card" className="master_card master_card-size" />
            </div>
          </div>
          <div className="card-info-right">
            <div className="card-info-description">{this.currentCard.name}</div>
            <div className="card-info-balance">{this.currentCard.balance} {this.currentCard.currency}</div>
          </div>
        </div>
        <div><input className="next but-next" type="button" value="&gt;" onClick={this.clickNext} /></div>

      </div>
    );
  }
}

export default SmallCardScroller;
