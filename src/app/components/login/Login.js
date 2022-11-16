import './Login.css';
import userStore from '../../UserStore';
import appconfig from '../../appconfig.json'
import React, { useState } from 'react';


async function loginUser(credentials) {
  return fetch(`${appconfig.API_URL}/login`, {
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

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      phone,
      password
    });
    
    // check login 
    if (response !== null && response.status === 200) {
      // show user page
      window.localStorage.setItem("userphone", phone);
      userStore.getState().setIsUserLoggedIn(true);
      window.open("http://localhost:3000/user-page", "_self");
    } 
    else {
      // show error message
      alert('Login or/and password are incorrect!');
    }
  }

  return (
    <div className="login-section">
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
        <div className="registration-btn">
          <a href="#">Реєстрація</a>
        </div>
      </form>
    </div>
  );
}

export default Login;

