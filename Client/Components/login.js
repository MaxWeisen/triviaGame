import React from 'react';
import '../src/login.scss';
import {Link} from 'react-router-dom';
// import Lobby from "../Pages/Lobby.js";



class Login extends React.Component {

  render() {
    return (

          <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <title>Login / Sign Up Form</title>
      {/* <link rel="shortcut icon" href="/assets/favicon.ico" /> */}
      <link rel="stylesheet" href="/login.css" type="text/css" />
      <div className="page">
        <div className="page__container">
          {/* Navigation Header */}
          <nav className="nav">
            <ul className="header__list">
              <li className="header__item"><a href="../index.html" className="nav__link">Home</a></li>
              <li className="header__item"><Link to="/Lobby">Trivia Game</Link> </li>
              {/* box next to Images */}
              <li className="header__item header__item--app">

              </li>
              <li onClick="document.location='./Sign-In/Login.html'"><button className="sign__in">Sign Up</button></li>
            </ul>
          </nav>
          <div className="container">
            <form className="form" id="login">
              <h1 className="form__title">Login</h1>
              <div className="form__message form__message--error" />
              <div className="form__input-group">
                <input type="text" className="form__input" autofocus placeholder="Username or email" />
                <div className="form__input-error-message" />
              </div>
              <div className="form__input-group">
                <input type="password" className="form__input" autofocus placeholder="Password" />
                <div className="form__input-error-message" />
              </div>
              <button className="form__button" type="submit">Continue</button>
              <p className="form__text">
                <a href="#" className="form__link">Forgot your password?</a>
              </p>
              <p className="form__text">
                <a className="form__link" href="./" id="linkCreateAccount">Don't have an account? Create account</a>
              </p>
            </form>
            <form className="form form--hidden" id="createAccount">
              <h1 className="form__title">Create Account</h1>
              <div className="form__message form__message--error" />
              <div className="form__input-group">
                <input type="text" id="signupUsername" className="form__input" autofocus placeholder="Username" />
                <div className="form__input-error-message" />
              </div>
              <div className="form__input-group">
                <input type="text" className="form__input" autofocus placeholder="Email Address" />
                <div className="form__input-error-message" />
              </div>
              <div className="form__input-group">
                <input type="password" className="form__input" autofocus placeholder="Password" />
                <div className="form__input-error-message" />
              </div>
              <div className="form__input-group">
                <input type="password" className="form__input" autofocus placeholder="Confirm password" />
                <div className="form__input-error-message" />
              </div>
              <button className="form__button" type="submit">Continue</button>
              <p className="form__text">
                <a className="form__link" href="./" id="linkLogin">Already have an account? Sign in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>

    )
  }

  // Login.propTypes = {
  //   setToken: PropTypes.func.isRequired
  // }

}


export default Login