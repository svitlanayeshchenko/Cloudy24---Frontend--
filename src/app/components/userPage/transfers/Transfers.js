import './Transfers.css';
import userStore from '../../../UserStore';
import SmallCardScroller from '../smallCardScroller/SmallCardScroller';
import React, { Component } from 'react';

class Transfers extends Component {

  fromCards = [];
  toCards = [];

  constructor() {
    super();
    this.isInitialized = false;
    this.clickBtnTransfers = this.clickBtnTransfers.bind(this);

    this.unsubCardInfoChange = userStore.subscribe(
      () => {
        const cards = userStore.getState().cardsInfo;
        const isUserInfoLoaded = userStore.getState().userInfoLoaded;

        this.fromCards.length = 0;
        this.toCards.length = 0;

        this.toCards.push({ custom: true, number: "" });

        let tempCards = JSON.parse(JSON.stringify(cards));
        tempCards.forEach(element => {
          this.fromCards.push(element);
          this.toCards.push(element);
        });

        if (isUserInfoLoaded && !this.isInitialized) {
          this.isInitialized = true;
          this.forceUpdate();
        }
      },
      state => state.cardsInfo);
  }

  componentDidMount() {
  }

  async doTransfer(fromNumber, toNumber, amount) {
    return fetch(`${process.env.REACT_APP_API_URL}/card/transfer?sourceCardNumber=${fromNumber}&targetCardNumber=${toNumber}&amount=${amount}`, {
      method: 'POST'
    })
      .then(data => data);
  }

  async clickBtnTransfers() {
    const fromCard = userStore.getState().fromCard;
    const toCard = userStore.getState().toCard;
    const amount = document.querySelector("#amount").value;

    const response = await this.doTransfer(fromCard.number, toCard.number, amount);

    // check response 
    if (response !== null && response.status === 200) {
      // show alert
      alert("Transfer was successful");
      window.open(`${process.env.REACT_APP_PUBLIC_URL}/user-page/transfers`, "_self");
    }
    else {
      // show error message
      alert('Something went wrong! Transfer was unsuccessful');
    }
  }

  render() {
    return (
      <div className="transfers">
        <div className="transfer-header">З картки</div>
        <SmallCardScroller cards={this.fromCards} setter={userStore.getState().setFromCard} />
        <div className="transfer-header">На картку</div>
        <SmallCardScroller cards={this.toCards} setter={userStore.getState().setToCard} />
        <div className="form-info">
          <input type="text" id="amount" name="amount" placeholder="Сума" required />
        </div>
        <div className="form-info">
          <input type="text" id="appointment" name="amount" placeholder="Призначення" />
        </div>
        <button className="btn-transfer" type="button" onClick={this.clickBtnTransfers}>Продовжити</button>
      </div>
    );
  }
}

export default Transfers;
