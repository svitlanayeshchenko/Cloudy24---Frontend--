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
      window.open(`${process.env.REACT_APP_PUBLIC_URL}/user-page`, "_self");
    }
    else {
      // show error message
      alert('Login or/and password are incorrect!');
    }
  }

  return (
    <div className="login-section">
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
    </div >
  );
}

export default Login;

