import './Header.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import UserPageButton from './userPageButton/UserPageButton';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import appModalBurgerStore from '../AppModalBurgerStore';

class Header extends Component {

    componentDidMount() {
        this.unsubmodalBurgerMenuVisibleChange = appModalBurgerStore.subscribe(
            () => {
                this.forceUpdate();
            },
            state => state.modalBurgerMenuVisible);
    }

    clickHandler(e, reload = true) {
        if (reload) {
            e.preventDefault();
        }
        appModalBurgerStore.getState().setmodalBurgerMenuVisible(false);
    }

    clickHandlerOpen(e) {
        e.preventDefault();
        appModalBurgerStore.getState().setmodalBurgerMenuVisible(true);
    }

    render() {

        return (
            <div className="header-section">
                <div className="header">
                    <NavLink onClick={event => this.clickHandler(event, false)} to={`${process.env.REACT_APP_PUBLIC_URL}/`} className="logo" >
                        <img src={logo} alt="logo" className="logo-img" />
                        <div className="logo-text">CloudyBank24</div>
                    </NavLink>
                    <div className="header-navigation">
                        <ul className={appModalBurgerStore.getState().modalBurgerMenuVisible ? ["navigation", "active"].join(" ") : ["navigation"]} onClick={this.clickHandler}>
                            <li className="navigation-item"><NavLink to={`${process.env.REACT_APP_PUBLIC_URL}/promo_cards`}>Картки</NavLink></li>
                            <li className="navigation-item"><NavLink to={`${process.env.REACT_APP_PUBLIC_URL}/promo_deposits`}>Депозити</NavLink></li>
                            <li className="navigation-item"><NavLink to="##">Міжнародні перекази</NavLink></li>
                            <li className="navigation-item"><NavLink to="##">Облігації</NavLink></li>
                            <li className="navigation-item"><NavLink to="##">ФОП</NavLink></li>
                        </ul>
                        <UserPageButton />
                        <div className="burger-button-menu">
                            {
                                appModalBurgerStore.getState().modalBurgerMenuVisible 
                                    ? <AiOutlineClose onClick={this.clickHandler} />
                                    : <AiOutlineMenu onClick={this.clickHandlerOpen} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

