import './CardHistory.css';
import userStore from '../../../../UserStore';
import { roundBalance, formatDate, addIcon, addTypeTranslation } from '../../../../AppHelper';
import React, { Component } from 'react';

class CardHistory extends Component {

  cardHistory = [];

  constructor() {
    super();

    this.getCardData();
  }

  async getCardData() {
    const currentCard = userStore.getState().currentCard;

    const cardNumber = currentCard.number;

    const response = await this.getCardHistory(cardNumber);

    // check response
    if (response !== null && response.status === 200) {
      // show user page
      const result = await response.json();
      this.cardHistory.length = 0;
      let tempCardHistory = [];

      result.forEach(element => {
        tempCardHistory.push(element);
      });
      tempCardHistory.reverse().forEach(element => {
        this.cardHistory.push(element);
      });;
      this.forceUpdate();
    }

    else {
      // show error message
      alert('Login or/and password are incorrect!');
    }
  }

  componentDidMount() {
    this.unsubCurrentCardChange = userStore.subscribe(
      async () => {
        this.getCardData();
      },
      state => state.currentCard);
  }

  async getCardHistory(number) {
    return fetch(`${process.env.REACT_APP_API_URL}/card/operations/${number}`)
      .then(data => data);
  }

  render() {
    return (
      <div className="card_history">
        {
          this.cardHistory.map(element => {
            return (
              <div key={JSON.stringify(element)} className="card_history-item">
                <div className="card-block-description">
                  <div className="card_history-icon"><div className="material-icons history-icons">{addIcon(element.type)}</div></div>
                  <div className="card_history-details">
                    <div className="card-details-name">{addTypeTranslation(element.type)}</div>
                    <div className="card-details-description">{element.description}</div>
                  </div>
                </div>
                <div className="card-details-amount">{roundBalance(element.amount)}</div>
                <div className="card_history-date">{formatDate(new Date(element.timestamp * 1000))}</div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default CardHistory;
