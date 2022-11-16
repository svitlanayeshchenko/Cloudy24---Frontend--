import './UserCard.css';
import card_logo from './card_logo.png';
import master_card from './master_card.png'
import React, { Component } from 'react';

class UserCard extends Component {

    constructor(props) {
        super(props);
        this.card = props.cardInfo;
    }

    render() {
        if (this.card === undefined || this.card.length === 0 || this.card[0] === undefined || this.card[0].name === undefined) {
            return (
                <div>
                    no cards
                </div>
            )
        }

        const numberCard = this.card[0].number;
        let newCardNumber = "";
        for (let i = 0; i < numberCard.length; i++) {
            if ((i + 1) % 4 === 0) {
                newCardNumber += numberCard[i] + " ";
            }
            else {
                newCardNumber += numberCard[i];
            }
        }

        // get shortYear and shortMonth
        const expiresEndEpoc = this.card[0].expiresEnd;
        const expiresEndMonth = ((new Date(expiresEndEpoc * 1000)).getMonth() + 1).toString();
        const expiresEndYear = (new Date(expiresEndEpoc * 1000)).getFullYear().toString();
        const shortYear = `${expiresEndYear[2]}${expiresEndYear[3]}`;
        const shortMonth = expiresEndMonth.length === 1 ? `0${expiresEndMonth}` : expiresEndMonth;

        return (
            <div className="bank-card">
                <div className="bank-card__title">
                    <div className="bank-card__type">world debit</div>
                    <div className="bank-card__title-logo">
                        <div><img src={card_logo} alt="logo" className="logo-card" /></div>
                        <div>CloudyBank</div>
                    </div>
                </div>
                <div className="bank-card__number">{newCardNumber}</div>
                <div className="bank-card__footer">
                    <div className="bank-card__date">{shortMonth}/{shortYear}</div>
                    <div className="bank-card__master-card">
                        <img src={master_card} alt="master_card" className="master_card" />
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;