import './Login.css';
import userStore from '../../UserStore';
import React, { useState } from 'react';

async function loginUser(credentials) {

  return fetch(`${process.env.REACT_APP_API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data);
}

function Login() {
  const [phone, setLogin] = useState();
  const [password, setPassword] = useState();
  const loginPage = document.querySelector(".login-page-section");
  const loginPageSpinner = document.querySelector(".login-page-spinner-section");

  let [...inputs] = document.querySelectorAll("input");

  let inputsArray = inputs.map(function (elem) {
    return elem;
  }).filter((elem) => {
    return elem.type != "submit"
  });

  const validateInputsFields = (target) => {
    if (target.name === "input-login") {
      return /^\+380\d{9}$/.test(target.value);
    }
    else if (target.name === "password-input") {
      return /[0-9a-z]{5,}/.test(target.value);
    }
  }

  inputsArray.map((e) => {
    e.addEventListener("change", (event) => {
      validateInputsFields(event.target);
    })
  });

  const handleSubmit = async e => {
    e.preventDefault();

    loginPage.style.display = "none";
    loginPageSpinner.style.display = "block";

    let validateRez = inputsArray.map(function (elem) {
      return validateInputsFields(elem);
    });

    let response;

    if (!validateRez.includes(false)) {
      response = await loginUser({
        phone,
        password
      });

      // check login 
      if (response !== null && response.status === 200) {
        // show user page
        window.localStorage.setItem("userphone", phone);
        userStore.getState().setIsUserLoggedIn(true);
        window.open(`${process.env.REACT_APP_PUBLIC_URL}/user-page`, "_self");
      }
      else {
        // show error message
        alert('Невірний логін або пароль!');
        loginPage.style.display = "flex";
        loginPageSpinner.style.display = "none";
      }
    }
    else {
      // show error message
      alert('Невірний формат логіну або паролю!');
        loginPage.style.display = "flex";
        loginPageSpinner.style.display = "none";
    }
  }

  return (
    <div className="login-section">
      <div className="login-page-section">
        <div className="left-login">
          <div className="login-users-card">
            <div>User: <span>Olena Melnyk</span></div>
            <div>login: <span>+380681111111</span></div>
            <div>password: <span>olena1990</span></div>
          </div>
          <div className="login-users-card">
            <div>User: <span>Bogdan Shevchyk</span></div>
            <div>login: <span>+380682222222</span></div>
            <div>password: <span>bogdan1970</span></div>
          </div>
        </div>
        <form className="login-navigation" onSubmit={handleSubmit}>
          <div className="login">
            <div className="label-login">
              <label htmlFor="login-input">Логін</label>
            </div>
            <div className="input-login">
              <input type="text" className="input-log" name="input-login" maxLength="32" required onChange={e => setLogin(e.target.value)} />
            </div>
          </div>
          <div className="password">
            <div className="label-login">
              <label htmlFor="password-input">Пароль</label>
            </div>
            <div className="input-login">
              <input type="password" className="input-log" name="password-input" maxLength="32" required onChange={e => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="login-btn">
            <input type="submit" name="submit" value="Увійти" />
          </div>
        </form>
        <div className="right-login">
          <div className="login-users-card">
            <div>User: <span>Maryna Kovalenko</span></div>
            <div>login: <span>+380683333333</span></div>
            <div>password: <span>maryna2001</span></div>
          </div>
          <div className="login-users-card">
            <div>User: <span>Dmytro Shevchyk</span></div>
            <div>login: <span>+380685555555</span></div>
            <div>password: <span>dmytro2010</span></div>
          </div>
        </div>
      </div>
      <div className="login-page-spinner-section">
        <div className="spinner">
        </div>
      </div>
    </div >
  );
}

export default Login;

