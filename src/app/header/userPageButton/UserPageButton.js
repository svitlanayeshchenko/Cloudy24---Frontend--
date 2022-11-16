import './UserPageButton.css';
import userStore from '../../UserStore';
import React, { Component } from 'react';

class UserPageButton extends Component {

  constructor() {
    super();

    this.isUserLoggedIn = false;
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {

    this.unsubisUserLoggedInChange = userStore.subscribe(
      () => {
        this.isUserLoggedIn = userStore.getState().isUserLoggedIn;
        this.forceUpdate();
      },
      state => state.isUserLoggedIn);
  }

  render() {
  
    if (this.isUserLoggedIn) {
      return (
        <div className="user-page-button">
          <div className="header-btn header-btn-login"><a href="/user-page"><div className="material-icons header-login-icons">face</div></a></div>
        </div>
      );
    } else {
      return (
        <div className="user-page-button">
          <div className="header-btn header-btn-logout"><a href="/login">Вхід</a></div>
        </div>
      );
    }

  }
}

export default UserPageButton;
