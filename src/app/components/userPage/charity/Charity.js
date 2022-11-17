import './Charity.css';
import SmallCardScroller from '../smallCardScroller/SmallCardScroller';
import userStore from '../../../UserStore';
import fond01 from './charityImg/fond01.png';
import fond02 from './charityImg/fond02.png';
import fond03 from './charityImg/fond03.png';
import fond04 from './charityImg/fond04.png';
import RadioButtons from '../../radioButtons/RadioButtons';
import React, { Component } from 'react';

class Charity extends Component {

  fromCards = [];

  constructor() {
    super();
    this.isInitialized = false;
    this.submitClickHandler = this.submitClickHandler.bind(this);

    this.items = [
      { id: 0, image: fond01, selected: false, number: "", name: "Благодійний фонд Сергія Притули" },
      { id: 1, image: fond02, selected: false, number: "", name: "Благодійний фонд Повернись живим" },
      { id: 2, image: fond03, selected: false, number: "", name: "Благодійний фонд Армія дронів" },
      { id: 3, image: fond04, selected: false, number: "", name: "Благодійний фонд Хелп Юкрейн Центр" },
    ]

    this.unsubCardInfoChange = userStore.subscribe(
      () => {
        const cards = userStore.getState().cardsInfo;
        const isUserInfoLoaded = userStore.getState().userInfoLoaded;

        this.fromCards.length = 0;

        let tempCards = JSON.parse(JSON.stringify(cards));
        tempCards.forEach(element => {
          this.fromCards.push(element);
        });

        if (isUserInfoLoaded && !this.isInitialized) {
          this.isInitialized = true;
          this.forceUpdate();
        }
      },
      state => state.cardsInfo);
  }

  submitClickHandler(e) {
    e.preventDefault();
  }

  componentDidMount() {
  }

  async doCharity(fromNumber, amount, currency, description, operationType) {
    return fetch(`${process.env.REACT_APP_API_URL}/card/withdraw?cardNumber=${fromNumber}&amount=${amount}&targetCurrency=${currency}&description=${description}&operationType=${operationType}`, {
      method: 'POST'
    })
      .then(data => data);
  }

  async submitClickHandler() {
    const fromCard = userStore.getState().fromCard;
    const operationType = "charity";
    const amount = document.querySelector("#amount").value;
    let description = undefined;
    this.items.forEach(item => {
      if (item.selected) {
        description = item.name;
      }
    });

    if (amount === "0" || amount === "" || description === undefined) {
      alert('Something went wrong! Charity was unsuccessful');
      return;
    }

    const response = await this.doCharity(fromCard.number, amount, fromCard.currency, description, operationType);

    // check response 
    if (response !== null && response.status === 200) {
      // show alert
      alert("Transfer was successful");
      window.open(`${process.env.REACT_APP_PUBLIC_URL}/user-page/charity`, "_self");
    }
    else {
      // show error message
      alert('Something went wrong! Charity was unsuccessful');
    }
  }


  render() {
    return (
      <div className="charity">
        <div className="charity-header">З картки</div>
        <SmallCardScroller cards={this.fromCards} setter={userStore.getState().setFromCard} />
        <div className="charity-header">Оберіть фонд</div>
        <RadioButtons items={this.items} />
        <div className="form-info">
          <input type="text" id="amount" name="amount" placeholder="Сума" required />
        </div>
        <button className="btn-charity" type="button" onClick={this.submitClickHandler}>Продовжити</button>
      </div>
    );
  }
}

export default Charity;
