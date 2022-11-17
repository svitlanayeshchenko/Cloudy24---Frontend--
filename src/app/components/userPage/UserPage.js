import './UserPage.css';
import React, { Component } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import userStore from '../../UserStore';

async function getUserInfo(phone) {
  phone = phone.replace("+", "%2b");
  return fetch(`${process.env.REACT_APP_API_URL}/user/${phone}`)
    .then(response => {
      // check response user-info
      if (response === undefined || response.status !== 200) {
        console.log("Could not get user info!");
        return null;
      }
      return response.json();
    })
    .then(data => data);
}

async function getUserCards(id) {
  return fetch(`${process.env.REACT_APP_API_URL}/card/user/${id}`)
    .then(response => {
      if (response === undefined || response.status !== 200) {
        console.log("Could not get user cards!");
        return null;
      }
      return response.json();
    })
    .then(data => data);
}

async function getUserData() {
  // 1. get user phone
  const phone = window.localStorage.getItem("userphone");
  // 2. get user info by user phone
  const userInfo = await getUserInfo(phone);
  window.localStorage.setItem("userinfo", JSON.stringify(userInfo));

  // 3. get cards by user id
  const userCards = await getUserCards(userInfo.id);
  window.localStorage.setItem("usercards", JSON.stringify(userCards));

  // 4. return user data in format: { info: {}, cards: [] } 
  return { info: userInfo, cards: userCards };
}

class UserPage extends Component {

  constructor() {
    super();
    this.onExitClickHandler = this.onExitClickHandler.bind(this);
  }

  async componentDidMount() {
    document.addEventListener('click', event => {
      if (event.target.matches('a')) {
        event.target.focus()
      }
    })

    const currentData = await getUserData();

    // update user store
    userStore.getState().setUserInfo(currentData.info);
    userStore.getState().setCardsInfo(currentData.cards)
    userStore.getState().setUserInfoLoaded(true);
    userStore.getState().setIsUserLoggedIn(true);
  }

  onExitClickHandler(e) {
    userStore.getState().setIsUserLoggedIn(false);
  }

  render() {
    return (
      <div className="user-page">
        <div className="user-page-left">
          <div className="user-page-navigation">
            <ul className="user-navigation">
              <li className="user-navigation-item"><NavLink to={`${process.env.REACT_APP_PUBLIC_URL}/user-page/cards`}>
                <div className="material-icons nav-icon">credit_card</div>
                <div className="nav-text">Мої картки</div></NavLink></li>
              <li className="user-navigation-item"><NavLink to={`${process.env.REACT_APP_PUBLIC_URL}/user-page/transfers`}>
                <div className="material-icons nav-icon">add_card</div>
                <div className="nav-text">Переказ на карту</div></NavLink></li>
              <li className="user-navigation-item"><NavLink to={`${process.env.REACT_APP_PUBLIC_URL}/user-page/charity`}>
                <div className="material-icons nav-icon">loyalty</div>
                <div className="nav-text">Благодійність</div></NavLink></li>
              <li className="user-navigation-item"><NavLink to={`${process.env.REACT_APP_PUBLIC_URL}/user-page/loans`}>
                <div className="material-icons nav-icon">credit_score</div>
                <div className="nav-text">Кредити</div></NavLink></li>
              <li className="user-navigation-item"><NavLink to={`${process.env.REACT_APP_PUBLIC_URL}/user-page/deposits`}>
                <div className="material-icons nav-icon">redeem</div>
                <div className="nav-text">Депозити</div></NavLink></li>
              <li className="user-navigation-item"><NavLink to="##">
                <div className="material-icons nav-icon">gite</div>
                <div className="nav-text">Комунальні платежі</div></NavLink></li>
              <li className="user-navigation-item"><NavLink to="##">
                <div className="material-icons nav-icon">settings</div>
                <div className="nav-text">Налаштування</div></NavLink></li>
              <li className="user-navigation-item"><NavLink to={`${process.env.REACT_APP_PUBLIC_URL}/`} onClick={this.onExitClickHandler}>
                <div className="material-icons nav-icon">logout</div>
                <div className="nav-text">Вихід</div></NavLink></li>
            </ul>
          </div>
        </div>
        <div className="user-page-right">
          <div className="user-content">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;

