import './PromoMenuDeposits.css';
import depositsImg from './deposits.png';
import appModalStore from '../../AppModalStore';
import React, { Component } from 'react';

class PromoMenuDeposits extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
    }

    clickHandler(e) {
        e.preventDefault();

        let btnInput = document.querySelector(".promo-deposits-btn a");
        let phoneNumber = document.querySelector("#phone-input");
        let textError = document.querySelector(".div-error-input");

        if (e.target !== btnInput) {
            phoneNumber.style.border = "1px solid #B6B6B6";
            textError.style.visibility = "hidden";
        } else {
            if (phoneNumber.value === undefined || phoneNumber.value === "" || phoneNumber.value === null) {
                phoneNumber.style.border = "2px solid rgb(237, 61, 61)";
                textError.innerHTML = "*Це обов'язкове поле для заповнення";
                textError.style.visibility = "visible";
            }
            else {
                let pattern = /\+38\d{10}/;
                let normalizedNumber = phoneNumber.value.replaceAll(" ", "").replaceAll("-", "").replaceAll("(", "").replaceAll(")", "");
                let phoneExist = pattern.test(normalizedNumber);
                if (phoneExist) {
                    appModalStore.getState().setmodalWindowVisible(true);
                }
                else {
                    phoneNumber.style.border = "2px solid rgb(237, 61, 61)";
                    textError.innerHTML = "*Невірний формат телефону";
                    textError.style.visibility = "visible";
                }
            }
            phoneNumber.value = "";
        }
    }


    render() {
        return (
            <div className="promo-menu-deposits" onClick={this.clickHandler}>
                <div className="deposits-background">
                    <div className="promo-menu-deposits-section">
                        <div className="deposits-section-header">
                            Депозити у CloudyBank — це супер вигідно!
                        </div>
                        <div className="deposits-section-content">
                            <div className="deposits-section-content-left">
                                <div className="content-left-header">
                                    <div className="content-header-title">
                                        Як відкрити депозит?
                                    </div>
                                    <div className="content-header-description">
                                        Відкрити депозит дуже просто, всього<br />
                                        лише кілька кроків і справа зроблена
                                    </div>
                                </div>
                                <ul className="content-left-navigation">
                                    <li className="content-left-navigation-item">
                                        <div className="left-navigation-item-number">
                                            1
                                        </div>
                                        <div className="left-navigation-item-text">
                                            Обрати валюту, бажаний термін та<br /> суму депозиту
                                        </div>
                                    </li>
                                    <li className="content-left-navigation-item">
                                        <div className="left-navigation-item-number">
                                            2
                                        </div>
                                        <div className="left-navigation-item-text">
                                            Обрати варіант виплати процентів: на<br />
                                            картку Cloudy або додати до суми<br />
                                            депозиту (капіталізація)
                                        </div>
                                    </li>
                                    <li className="content-left-navigation-item">
                                        <div className="left-navigation-item-number">
                                            3
                                        </div>
                                        <div className="left-navigation-item-text">
                                            Переглянути депозитний договір<br /> і підтвердити оформлення
                                        </div>
                                    </li>
                                    <li className="content-left-navigation-item">
                                        <div className="left-navigation-item-number">
                                            4
                                        </div>
                                        <div className="left-navigation-item-text">
                                            Обрати зручний спосіб внесення<br /> коштів
                                        </div>
                                    </li>
                                </ul>
                                <div className="content-left-input">
                                    <input name="phone" id="phone-input" ukr="" required=""
                                        type="tel" validate="phone" placeholder="+380 (XX) XXX-XX-XX" />
                                    <div className="promo-deposits-btn">
                                        <a href="#">Оформити депозит</a></div>
                                </div>
                                <div className="div-error-input">
                                </div>
                            </div>
                            <div className="deposits-section-content-right">
                                <div className="deposits-section-img">
                                    <img src={depositsImg} alt="deposits_image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PromoMenuDeposits;
