import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import UserPage from './components/userPage/UserPage';
import Cards from './components/userPage/cards/Cards';
import Transfers from './components/userPage/transfers/Transfers';
import Charity from './components/userPage/charity/Charity';
import Loans from './components/userPage/loans/Loans';
import Deposits from './components/userPage/deposits/Deposits';
import Payments from './components/userPage/payments/Payments';
import UserSettings from './components/userPage/uгserSettings/UserSettings';
import ModalWindow from './modalWindow/ModalWindow';
import PromoMenuCards from './components/promoMenuCards/PromoMenuCards';
import PromoMenuDeposits from './components/promoMenuDeposits/PromoMenuDeposits';
import PromoInternationalTransfers from './components/promoInternationalTransfers/PromoInternationalTransfers';
import PromoBonds from './components/promoBonds/PromoBonds';
import PromoIndEntrepreneur from './components/promoIndEntrepreneur/PromoIndEntrepreneur';
import Exit from './components/userPage/exit/Exit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {

  return (
    <Router>
      <div className="App">
        <ModalWindow />
        <Header />
        <div className="routes">
          <Routes>
            <Route path={`${process.env.REACT_APP_PUBLIC_URL}/`} element={<Home />} />
            <Route path={`${process.env.REACT_APP_PUBLIC_URL}/login`} element={<Login />} />
            <Route path={`${process.env.REACT_APP_PUBLIC_URL}/user-page`} element={<UserPage />} >
              <Route path="" element={<Cards />} />
              <Route path="cards" element={<Cards />} />
              <Route path="transfers" element={<Transfers />} />
              <Route path="charity" element={<Charity />} />
              <Route path="loans" element={<Loans />} />
              <Route path="deposits" element={<Deposits />} />
              <Route path="payments" element={<Payments />} />
              <Route path="uгserSettings" element={<UserSettings />} />
              <Route path="exit" element={<Exit />} />
            </Route>
            <Route path={`${process.env.REACT_APP_PUBLIC_URL}/promo_cards`} element={<PromoMenuCards />} />
            <Route path={`${process.env.REACT_APP_PUBLIC_URL}/promo_deposits`} element={<PromoMenuDeposits />} />
            <Route path={`${process.env.REACT_APP_PUBLIC_URL}/promo-international-transfers`} element={<PromoInternationalTransfers />} />
            <Route path={`${process.env.REACT_APP_PUBLIC_URL}/promo-bonds`} element={<PromoBonds />} />
            <Route path={`${process.env.REACT_APP_PUBLIC_URL}/promo-indEntrepreneur`} element={<PromoIndEntrepreneur />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
