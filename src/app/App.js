import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import UserPage from './components/userPage/UserPage';
import Cards from './components/userPage/cards/Cards';
import Transfers from './components/userPage/transfers/Transfers';
import Loans from './components/userPage/loans/Loans';
import Deposits from './components/userPage/deposits/Deposits';
import Payments from './components/userPage/payments/Payments';
import Charity from './components/userPage/charity/Charity';
import CurrencyExchange from './components/userPage/currencyExchange/CurrencyExchange';
import ModalWindow from './modalWindow/ModalWindow';
import Exit from './components/userPage/exit/Exit';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <ModalWindow />
        <Header />
        <div className="routes">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user-page' element={<UserPage />} >
              <Route path="" element={<Cards />} />
              <Route path="cards" element={<Cards />} />
              <Route path="transfers" element={<Transfers />} />
              <Route path="loans" element={<Loans />} />
              <Route path="deposits" element={<Deposits />} />
              <Route path="payments" element={<Payments />} />
              <Route path="charity" element={<Charity />} />
              <Route path="currency-exchange" element={<CurrencyExchange />} />
              <Route path="exit" element={<Exit />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router >
  );
}

export default App;