import './Footer.css';
import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-info">
          <div className="info">
            <div className="info-item">
              <div className="material-icons info-icons">call</div>
              <div className="item-text">
                <a href="tel:7900">7900</a>
                <p>Безкоштовно з мобільного</p>
              </div>
            </div>
            <div className="info-item">
              <div className="material-icons info-icons">language</div>
              <div className="item-text">
                <a href="tel:+380957900079">+38 095 790 00 79</a>
                <p>Для дзвінків із-за кордону та<br /> зі стаціонарних телефонів</p>
              </div>
            </div>
            <div className="info-item">
              <div className="material-icons info-icons">mail</div>
              <div className="item-text">
                <a href="mailto:pr@cloudybank.com.ua">pr@cloudybank.com.ua</a>
                <p>Для питаннь та пропозицій</p>
              </div>
            </div>

            <ul className="social-navigation">
              <li className="social-media-item"><a href="#"></a></li>
              <li className="social-media-item"><a href="#"></a></li>
              <li className="social-media-item"><a href="#"></a></li>
              <li className="social-media-item"><a href="#"></a></li>
              <li className="social-media-item"><a href="#"></a></li>
            </ul>
          </div>
          <div className="about-bank">
            <div className="about-header">Банк</div>
            <ul className="about-navigation">
              <li className="about-item"><a href="#">Про банк</a></li>
              <li className="about-item"><a href="#">Кар'єра</a></li>
              <li className="about-item"><a href="#">Контакти</a></li>
              <li className="about-item"><a href="#">Безпека</a></li>
              <li className="about-item"><a href="#">Блог</a></li>
              <li className="about-item"><a href="#">Умови та правила</a></li>
            </ul>

          </div>
          <div className="about-card">
            <div className="about-header">Картка</div>
            <ul className="about-navigation">
              <li className="about-item"><a href="#">Кредитна картка</a></li>
              <li className="about-item"><a href="#">єПідтримка</a></li>
              <li className="about-item"><a href="#">Перекази та платежі</a></li>
              <li className="about-item"><a href="#">Депозит</a></li>
              <li className="about-item"><a href="#">Ощадний рахунок</a></li>
              <li className="about-item"><a href="#">Кешбек та акції</a></li>
              <li className="about-item"><a href="#">Проста розстрочка</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rights-reserved">@cloudybank 2022. Усі права захищені.
      </div>
    </div>
  );
}

export default Footer;