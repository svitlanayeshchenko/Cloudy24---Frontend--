import './CardScroller.css';
import UserCard from '../userCard/UserCard';
import { roundBalance } from '../../../../AppHelper';
import React, { Component } from 'react';
import userStore from '../../../../UserStore';

/* card example: 
{ 
    "number" = 1111222233334444,
    "name" = "",
    "validFrom" = 0,
    "expiresEnd" = 0,
    "balance" = 0,
    "active" = true,
    "currency" = "USD",
    "userId" = 1 
} 
*/
class CardScroller extends Component {

    card = []

    constructor() {
        super();

        this.card.push(userStore.getState().currentCard);
    }

    componentDidMount() {

        this.unsubCurrentCardChange = userStore.subscribe(
            () => {
                this.card.length = 0;
                const currentCard = userStore.getState().currentCard;
                this.card.push(currentCard);
                this.forceUpdate();
            },
            state => state.currentCard);

        const btn_prev = document.querySelector('.prev');
        const btn_next = document.querySelector('.next');


        const set_current_index = userStore.getState().setCurrentCardIndex;


        btn_next.onclick = function () {
            const current_index = userStore.getState().currentCardIndex;
            set_current_index(current_index + 1);
        }

        btn_prev.onclick = function () {
            const current_index = userStore.getState().currentCardIndex;
            set_current_index(current_index - 1);
        }


    }


    render() {
        return (
            <div className="card-scroller">
                <div className="card-andbuttons-section">
                    <div className="div-prev"><input className="prev b-prev" type="button" value="&lt;" /></div>
                    <UserCard cardInfo={this.card} />
                    <div className="div-next"><input className="next b-next" type="button" value="&gt;" /></div>
                </div>
                <div className="card-info">
                    <div className="card-balance">{roundBalance(this.card[0].balance)} {this.card[0].currency}</div>
                    <div className="credit-item-name">{this.card[0].name} Картка</div>
                </div>
            </div>
        )
    }
}

export default CardScroller;