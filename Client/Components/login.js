import React from 'react';
import '../src/login.scss';
import {Link} from 'react-router-dom';
import Lobby from "../Pages/Lobby.js";



class Login extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleUserNameText = this.handleUserNameText.bind(this);
    this.handlePasswordText = this.handlePasswordText.bind(this);
    this.attemptLogin = this.attemptLogin.bind(this);
  }

  handleUserNameText(e){
    console.log(e.target.value);
    this.setState({ username: e.target.value })
  }

  handlePasswordText(e){
    console.log(e.target.value);
    this.setState({ password: e.target.value })
  }

  attemptLogin(e){
    e.preventDefault();

    const loginInfo = {
      username: this.state.username,
      password: this.state.password
    }
    
    fetch('/login', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(loginInfo) // body data type must match "Content-Type" header
    })
    .then(data => console.log('Successfully Sent to Server'))
    .catch(err => console.log(err));

  }

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
              {/* this button takes you to the game without login */}
              <li className="header__item"><Link to="/Lobby">Trivia Game</Link> </li>
              {/* box next to Images */}
              <li className="header__item header__item--app"></li>
                <Link to="/SignUp"><button className="sign__in">Sign Up</button></Link>
            </ul>
          </nav>
          <div className="container">
            <form className="form" id="login">
              <h1 className="form__title">Login</h1>
              <div className="form__message form__message--error" />
              <div className="form__input-group">
                <input type="text" className="form__input" autofocus="true" placeholder="Username or email" value={this.state.username} onChange={this.handleUserNameText}/>
                <div className="form__input-error-message" />
              </div>
              <div className="form__input-group">
                <input type="password" className="form__input" autofocus="true" placeholder="Password" value={this.state.password} onChange={this.handlePasswordText} />
                <div className="form__input-error-message" />
              </div>
              <button className="form__button" type="submit" onClick={this.attemptLogin}>Continue</button>
              <p className="form__text">
                <a href="#" className="form__link">Forgot your password?</a>
              </p>
              <p className="form__text">
                <Link className="form__form__link" to="/SignUp" id="linkCreateAccount">Don't have an account? Create account</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>

    )
  }



}


export default Login