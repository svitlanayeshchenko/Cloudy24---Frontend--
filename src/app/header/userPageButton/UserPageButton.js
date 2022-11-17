import './UserPageButton.css';
import userStore from '../../UserStore';
import React, { Component } from 'react';

class UserPageButton extends Component {

  constructor() {
    super();

    this.isUserLoggedIn = false;
    this.componentDidMount = this.componentDidMount.bind(this);

    this.userName = "";
  }

  componentDidMount() {

    this.unsubisUserLoggedInChange = userStore.subscribe(
      () => {
        this.isUserLoggedIn = userStore.getState().isUserLoggedIn;
        this.userName = userStore.getState().userInfo.firstName;
        this.userSurname = userStore.getState().userInfo.lastName;
        this.forceUpdate();
      },
      state => state.isUserLoggedIn);
  }

  render() {

    if (this.isUserLoggedIn) {
      return (
        <div className="user-page-button">
          <div className="page-button-section">
            <a href={`${process.env.REACT_APP_PUBLIC_URL}/user-page`}>
              <div className="button-section-icon">
                <div className="material-icons header-login-icons">person</div>
              </div>
              <div className="button-section-name">
                {this.userName} {this.userSurname}
              </div>
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="user-page-button">
          <div className="header-btn header-btn-logout"><a href={`${process.env.REACT_APP_PUBLIC_URL}/login`}>Вхід</a></div>
        </div>
      );
    }

  }
}

export default UserPageButton;
