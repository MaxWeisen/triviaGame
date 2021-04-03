import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Components/login';
// import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Lobby from "../Pages/Lobby.js";


function App(){
  // const [token, setToken] = useState();

        return(
          <BrowserRouter>
            <div className="wrapper">
            {/* <h1>Main</h1> */}
                <Route exact path='/'>
                  <Login/>
                </Route>
                <Route path="/Lobby">
                  <Lobby />
                </Route>

            </div>
          </BrowserRouter>
        )
}


ReactDOM.render(<App />, document.getElementById('app'))
