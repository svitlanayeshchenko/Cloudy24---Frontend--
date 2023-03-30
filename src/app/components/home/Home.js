import './Home.css';
import React, { Component } from 'react';
import appStore from './img/app_store.png';
import appGallary from './img/app_gallery.png';
import googlePlay from './img/google_play.png';
import creditCardPng from './img/creditcard.png';
import backPhonePng from './img/back_phone.png';
import logo1 from './img/logo-item1.png';
import logo2 from './img/logo-item2.png';
import logo3 from './img/logo-item3.png';
import logo4 from './img/logo-item4.png';
import logo5 from './img/logo-item5.png';
import appModalStore from '../../AppModalStore';

class Home extends Component {

  componentDidMount() {

    //Movement Animation to happen
    const promoCard = document.querySelector(".promo-card");
    const containerPromoRight = document.querySelector(".right");

    //Item
    const creditCardImg = document.querySelector(".credit-card img");

    //Moving Animation Event
    containerPromoRight.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      promoCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    //Animate In
    containerPromoRight.addEventListener("mouseenter", (e) => {
      promoCard.style.transition = "none";
      creditCardImg.style.transform = "translateZ(200px) rotateZ(-360deg) scale(1.4)";
    });

    //Animate Out
    containerPromoRight.addEventListener("mouseleave", (e) => {
      promoCard.style.transition = "all 0.5s ease";
      promoCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
      creditCardImg.style.transform = "translateZ(0px) rotateZ(0deg) scale(1)";
    });

    const itemOne = document.querySelector("#item-one");
    const itemTwo = document.querySelector("#item-two");
    const itemThree = document.querySelector("#item-three");
    const itemFour = document.querySelector("#item-four");
    const itemFive = document.querySelector("#item-five");
    const itemImage = document.querySelector("#itemImg");

    itemOne.addEventListener("mouseenter", (e) => {
      itemImage.style.backgroundImage = `url(${logo1})`;
      itemImage.style.transition = "all 0.5s ease";
    });

    itemOne.addEventListener("mouseleave", (e) => {
      itemImage.style.backgroundImage = `url(${logo1})`;
      itemImage.style.transition = "all 0.5s ease";
    });

    itemTwo.addEventListener("mouseenter", (e) => {
      itemImage.style.backgroundImage = `url(${logo2})`;
      itemImage.style.transition = "all 0.5s ease";
    });

    itemTwo.addEventListener("mouseleave", (e) => {
      itemImage.style.backgroundImage = `url(${logo2})`;
      itemImage.style.transition = "all 0.5s ease";
    });

    itemThree.addEventListener("mouseenter", (e) => {
      itemImage.style.backgroundImage = `url(${logo3})`;
      itemImage.style.transition = "all 0.5s ease";
    });

    itemThree.addEventListener("mouseleave", (e) => {
      itemImage.style.backgroundImage = `url(${logo3})`;
      itemImage.style.transition = "all 0.5s ease";
    });

    itemFour.addEventListener("mouseenter", (e) => {
      itemImage.style.backgroundImage = `url(${logo4})`;
      itemImage.style.transition = "all 0.5s ease";
    });

    itemFour.addEventListener("mouseleave", (e) => {
      itemImage.style.backgroundImage = `url(${logo4})`;
      itemImage.style.transition = "all 0.5s ease";
    });

    itemFive.addEventListener("mouseenter", (e) => {
      itemImage.style.backgroundImage = `url(${logo5})`;
      itemImage.style.transition = "all 0.5s ease";
    });

    itemFive.addEventListener("mouseleave", (e) => {
      itemImage.style.backgroundImage = `url(${logo5})`;
      itemImage.style.transition = "all 0.5s ease";
    });

  }

  clickHandler(e) {
    e.preventDefault();

    let btnInput = document.querySelector(".promo-btn a");
    let phoneNumber = document.querySelector("#phone-id");
    let textError = document.querySelector(".div-error");

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
      <div className="content-section-home" onClick={this.clickHandler}>
        <div className="content">
          <div className="left">
            <div className="container-promo-left">
              <div className="promo-one">Кредитні відсотки <br />легші за хмаринки</div>
              <div className="promo-two"><span>Три місяці</span> кредитного<br /> періоду під<br /><span>0%</span>
              </div>
              <div className="promo-advert">Досі не маєш картки?<br /> Залиш номер телефону і ми розкажемо як
                отримати переваги картки Cloudy</div>
              <div className="promo-input">
                <input name="phone" id="phone-id" ukr="" onClick={this.clickHandlerInput} required=""
                  type="tel" validate="phone" placeholder="+380 (XX) XXX-XX-XX" />
                <div className="promo-btn"><a href={`${process.env.REACT_APP_PUBLIC_URL}/`}>Хочу картку</a></div>
              </div>
              <div className="div-error">
              </div>
              <div className="promo-app">
                <div className="app-btn app_store"><a href="##"><img src={appStore}
                  alt="google_play" /> </a></div>
                <div className="app-btn google_play"><a href="##"><img src={googlePlay}
                  alt="gapp_store" /> </a></div>
                <div className="app-btn app_gallery"><a href="##"><img src={appGallary}
                  alt="app_gallery" /> </a></div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="container-promo-right">
              <div className="promo-card">
                <div className="credit-card">
                  <img src={creditCardPng} alt="credit_card" />
                </div>
                <div className="promo-phone">
                  <img src={backPhonePng} alt="phone" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="promo-section-one">
          <div className="section-one-content">
            <div className="benefits-header">
              <div className="benefits-header-title">
                Мобільний банк CloudyBank. Плати, витрачай, накопичуй,<br /> зберігай —
                усі фінансові послуги та сервіси у зручному додатку!
              </div>
              <div className="benefits-header-discription">
                Мобільний банк дає можливість безпечно отримати<br /> банківські послуги, не виходячи з дому.
              </div>
            </div>
            <div className="benefits-section">
              <div className="benefits-section-top">
                <div className="benefits-section-card">
                  <div className="section-card-icon">
                    <div className="section-card-icon-box">
                      <div className="material-icons benefit-card-icons">redeem</div>
                    </div>
                  </div>
                  <div className="section-card-text">
                    <div className="card-text-title">
                      Керуйте своєю картою
                    </div>
                    <div className="card-text-description">
                      Легко змінюйте ліміт витрат, перевіряйте пін-код, копіюйте номер картки,
                      CVV-код чи навіть блокуйте картку зі смартфону.
                    </div>
                  </div>
                </div>
                <div className="benefits-section-card">
                  <div className="section-card-icon">
                    <div className="section-card-icon-box">
                      <div className="material-icons benefit-card-icons">savings</div>
                    </div>
                  </div>
                  <div className="section-card-text">
                    <div className="card-text-title">
                      Депозити та кредити
                    </div>
                    <div className="card-text-description">
                      Відкривайте депозити на найвигідніших умовах, керуйте ними у додатку,
                      оплачуйте кредити просто зі смартфону – зручніше не буває.
                    </div>
                  </div>
                </div>
                <div className="benefits-section-card">
                  <div className="section-card-icon">
                    <div className="section-card-icon-box">
                      <div className="material-icons benefit-card-icons">currency_exchange</div>
                    </div>
                  </div>
                  <div className="section-card-text">
                    <div className="card-text-title">
                      Обмінюйте валюту
                    </div>
                    <div className="card-text-description">
                      Більше не потрібно йти у відділення банку чи до вуличної каси –
                      обмінюйте валюту просто у власному додатку.
                    </div>
                  </div>
                </div>
              </div>
              <div className="benefits-section-bottom">
                <div className="benefits-section-card">
                  <div className="section-card-icon">
                    <div className="section-card-icon-box">
                      <div className="material-icons benefit-card-icons">price_change</div>
                    </div>
                  </div>
                  <div className="section-card-text">
                    <div className="card-text-title">
                      Віртуальні картки та рахунки
                    </div>
                    <div className="card-text-description">
                      Відкривайте віртуальні картки з рахунками у національній або іноземній валюті.
                      Переказуйте та отримуйте гроші, платіть через Інтернет або смартфоном.
                    </div>
                  </div>
                </div>
                <div className="benefits-section-card">
                  <div className="section-card-icon">
                    <div className="section-card-icon-box">
                      <div className="material-icons benefit-card-icons">cottage</div>
                    </div>
                  </div>
                  <div className="section-card-text">
                    <div className="card-text-title">
                      Сплачуйте комунальні платежі та мобільні послуги
                    </div>
                    <div className="card-text-description">
                      У швидкий та зручний спосіб сплачуйте усі рахунки за комунальні послуги
                      та без комісії поповнюйте мобільний рахунок.
                    </div>
                  </div>
                </div>
                <div className="benefits-section-card">
                  <div className="section-card-icon">
                    <div className="section-card-icon-box">
                      <div className="material-icons benefit-card-icons">app_shortcut</div>
                    </div>
                  </div>
                  <div className="section-card-text">
                    <div className="card-text-title">
                      Підтримка 24/7
                    </div>
                    <div className="card-text-description">
                      Ми завжди на зв’язку, щоб допомогти вам отримати необхідну інформацію
                      чи вирішити будь-яке питання. Щодня. Цілодобово.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="promo-section-two">
          <div className="section-two-content">
            <div className="section-two-left">
              <div className="section-two-img" id="itemImg">
              </div>
            </div>
            <div className="section-two-right">
              <div className="section-two-header">
                <div className="section-two-header-title">
                  Скачай банк у свій смартфон —<br />мобільний додаток CloudyBank24!
                </div>
                <div className="section-two-header-description">
                  Почати - дуже легко!
                </div>
                <ul className="section-two-navigation">
                  <li className="section-two-navigation-item" id="item-one">
                    <div className="navigation-item-img">
                      <div className="material-icons navigation-item-icons">system_update</div>
                    </div>
                    <span className="navigation-item-content">
                      Завантаж додаток CloudyBank24
                    </span>
                  </li>
                  <li className="section-two-navigation-item" id="item-two">
                    <div className="navigation-item-img">
                      <div className="material-icons navigation-item-icons">remember_me</div>
                    </div>
                    <span className="navigation-item-content">
                      Додай фото документів
                    </span>
                  </li>
                  <li className="section-two-navigation-item" id="item-three">
                    <div className="navigation-item-img">
                      <div className="material-icons navigation-item-icons">aod</div>
                    </div>
                    <span className="navigation-item-content">
                      Заповни анкету
                    </span>
                  </li>
                  <li className="section-two-navigation-item" id="item-four">
                    <div className="navigation-item-img">
                      <div className="material-icons navigation-item-icons">mobile_screen_share</div>
                    </div>
                    <span className="navigation-item-content">
                      Обери доставку чи забери Cloudy-картку у відділенні
                    </span>
                  </li>
                  <li className="section-two-navigation-item" id="item-five">
                    <div className="navigation-item-img">
                      <div className="material-icons navigation-item-icons">security_update_good</div>
                    </div>
                    <span className="navigation-item-content">
                      Готово! Додай картку у додаток та відчуй її переваги
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;




