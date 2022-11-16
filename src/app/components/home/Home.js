import './Home.css';
import React, { Component } from 'react';
import appStore from './img/app_store.png';
import appGallary from './img/app_gallery.png';
import googlePlay from './img/google_play.png';
import creditCardPng from './img/creditcard.png';
import backPhonePng from './img/back_phone.png';
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
      creditCardImg.style.transform = "translateZ(200px) rotateZ(-360deg) scale(1.25)";
    });

    //Animate Out
    containerPromoRight.addEventListener("mouseleave", (e) => {
      promoCard.style.transition = "all 0.5s ease";
      promoCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
      creditCardImg.style.transform = "translateZ(0px) rotateZ(0deg) scale(1)";
    });
  }

  clickHandler(e) {
    e.preventDefault();
    appModalStore.getState().setmodalWindowVisible(true);
  }

  render() {
    return (
      <div className="content-section-home">
        <div className="content">
          <div className="left">
            <div className="container-promo-left">
              <div className="promo-one">Кредитні відсотки <br />легші за хмаринки</div>
              <div className="promo-two"><span>Три місяці</span> кредитного<br /> періоду під<br /><span>0%</span>
              </div>
              <div className="promo-advert">Досі не маєш картки?<br /> Залиш номер телефону і ми розкажемо як
                отримати переваги картки Cloudy</div>
              <div className="promo-input">
                <input type="tel" id="phone" name="phone" placeholder="+3 8(0__) ___ __ __" required />
                <div className="promo-btn" onClick={this.clickHandler}><a href="#">Хочу картку</a></div>
              </div>
              <div className="promo-app">
                <div className="app-btn app_store"><a href="#"><img src={appStore}
                  alt="google_play" /></a></div>
                <div className="app-btn google_play"><a href="#"><img src={googlePlay}
                  alt="gapp_store" /></a></div>
                <div className="app-btn app_gallery"><a href="#"><img src={appGallary}
                  alt="app_gallery" /></a></div>
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
            <div className="section-one-left">section-one-left
            </div>
            <div className="section-one-right">
              <div className="benefits-header">
                <div className="benefits-header-title">
                  Мобільний банк CloudyBank. Плати,<br /> витрачай, накопичуй, зберігай —<br />
                  усі фінансові послуги у зручному додатку!
                </div>
                <div className="benefits-header-discription">
                  Мобільний банк дає можливість безпечно отримати<br /> банківські послуги, не виходячи з дому.
                </div>
              </div>
              <div className="benefits-section">

                <div className="benefits-section-left">

                  <div className="benefits-section-card">
                    <div className="section-card-icon">
                      <div className="section-card-icon-box">
                        <div className="material-icons benefit-card-icons">language</div>
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
                  <div className="benefits-section-card margin-right">
                    <div className="section-card-icon">
                      <div className="section-card-icon-box">
                        <div className="material-icons benefit-card-icons">language</div>
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
                        <div className="material-icons benefit-card-icons">language</div>
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


                </div>

                <div className="benefits-section-right">
                <div className="benefits-section-card">
                    <div className="section-card-icon">
                      <div className="section-card-icon-box">
                        <div className="material-icons benefit-card-icons">language</div>
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
                        <div className="material-icons benefit-card-icons">language</div>
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
                        <div className="material-icons benefit-card-icons">language</div>
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

                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="promo-section-two">

        </div>
        <div className="promo-section-three">

        </div>
      </div>
    );
  }
}


export default Home;




