import './Header.css';
import React from 'react';
import logo from './logo.svg';
import UserPageButton from './userPageButton/UserPageButton';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="header-section">
            <div className="header">
                <NavLink to="/" className="logo">
                    <img src={logo} alt="logo" className="logo-img" />
                    <div className="logo-text">CloudyBank24</div>
                </NavLink>
                <div className="header-navigation">
                    <ul className="navigation">
                        <li className="navigation-item"><a href="#">Картки</a></li>
                        <li className="navigation-item"><a href="#">Депозити</a></li>
                        <li className="navigation-item"><a href="#">Міжнародні перекази</a></li>
                        <li className="navigation-item"><a href="#">Облігації</a></li>
                        <li className="navigation-item"><a href="#">ФОП</a></li>
                    </ul>
                    <UserPageButton />
                </div>
            </div>
        </div>
    );
}

export default Header;

