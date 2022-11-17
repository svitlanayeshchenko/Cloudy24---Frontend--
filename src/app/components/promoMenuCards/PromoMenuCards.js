import './PromoMenuCards.css';
import cardIcon1 from './img/card_icon1.png';
import cardIcon2 from './img/card_icon2.png';
import cardIcon3 from './img/card_icon3.png';
import cardIcon4 from './img/card_icon4.png';
import cardIcon5 from './img/card_icon5.png';
import cardIcon6 from './img/card_icon6.png';
import React, { Component } from 'react';


class PromoMenuCards extends Component {

  componentDidMount() {

    const cardsPromoCard = document.querySelectorAll(".cards-promo-card");

    cardsPromoCard.forEach(promoCard => {

      promoCard.addEventListener("mouseenter", (e) => {
        const cardsPromoImag = promoCard.querySelector(".cards-promo-img img");
        cardsPromoImag.style.transition = "all 0.5s ease";
        cardsPromoImag.style.transform = "rotate(-7deg)";
      });

      promoCard.addEventListener("mouseleave", (e) => {
        const cardsPromoImag = promoCard.querySelector(".cards-promo-img img");
        cardsPromoImag.style.transition = "all 0.5s ease";;
        cardsPromoImag.style.transform = "rotate(0deg)";
      });
    });
  }

  render() {
    return (
      <div className="promo-menu-cards">
        <div className="promo-menu-cards-section">
          <div className="promo-menu-cards-section-header">
            Картки
          </div>
          <div className="cards-section-content">
            <div className="cards-section-top">
              <div className="cards-promo-card">
                <div className="cards-promo-img">
                  <img src={cardIcon1} alt="card1" />
                </div>
                <div className="cards-promo-info">
                  <div className="cards-promo-info-title">
                    Cloudy картка
                  </div>
                  <div className="cards-promo-info-description">
                    Прості перекази, оплата комуналки, функціональна<br /> виписка,
                    налаштування картки - тепер у вашій кишені!
                  </div>
                </div>
              </div>
              <div className="cards-promo-card">
                <div className="cards-promo-img">
                  <img src={cardIcon2} alt="card2" />
                </div>
                <div className="cards-promo-info">
                  <div className="cards-promo-info-title">
                    Чорна картка
                  </div>
                  <div className="cards-promo-info-description">
                    Картка у класі Mastercard World Elite і VISA Infinite, для<br /> великих привілеїв і взагалі ніяких обмежень.
                  </div>
                </div>
              </div>
              <div className="cards-promo-card">
                <div className="cards-promo-img">
                  <img src={cardIcon3} alt="card3" />
                </div>
                <div className="cards-promo-info">
                  <div className="cards-promo-info-title">
                    Premium картка
                  </div>
                  <div className="cards-promo-info-description">
                    Престижна картка підкреслює статус власника. Це<br /> найвищий рівень турботи, безпеки і конфіденційності.
                  </div>
                </div>
              </div>
            </div>
            <div className="cards-section-bottom">
              <div className="cards-promo-card">
                <div className="cards-promo-img">
                  <img src={cardIcon4} alt="card4" />
                </div>
                <div className="cards-promo-info">
                  <div className="cards-promo-info-title">
                    Біла картка
                  </div>
                  <div className="cards-promo-info-description">
                    На ній немає кредитного ліміту, так що вона ідеально<br /> підходить для отримання зарплати або ФОП-виплат.
                  </div>
                </div>
              </div>
              <div className="cards-promo-card">
                <div className="cards-promo-img">
                  <img src={cardIcon5} alt="card5" />
                </div>
                <div className="cards-promo-info">
                  <div className="cards-promo-info-title">
                    Дитяча картка
                  </div>
                  <div className="cards-promo-info-description">
                    Картка для клієнтів від 6 до 14 років. Включає в себе<br /> батьківський контроль, а також нову тему додатку.
                  </div>
                </div>
              </div>
              <div className="cards-promo-card">
                <div className="cards-promo-img">
                  <img src={cardIcon6} alt="card6" />
                </div>
                <div className="cards-promo-info">
                  <div className="cards-promo-info-title">
                    єПідтримка
                  </div>
                  <div className="cards-promo-info-description">
                    Картка для отримання допомоги від держави
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PromoMenuCards;
