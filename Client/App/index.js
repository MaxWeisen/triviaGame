import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Components/Login';
// import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Lobby from "../Pages/Lobby.js";
import Signup from '../Components/SignUp';


function App(){
  // const [token, setToken] = useState();

        return(
          <BrowserRouter>
            <div className="wrapper">

                <Route exact path='/'>
                  <Login/>
                </Route>
                <Route exact path="/SignUp">
                  <Signup/>
                </Route>
                <Route path="/Lobby">
                  <Lobby />
                </Route>

            </div>
          </BrowserRouter>
        )
}


ReactDOM.render(<App />, document.getElementById('app'))
