import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

//Pages
import Navigation from '../pages/Navigation';
import Schemes from '../pages/Schemes';
import EmptyPage from '../pages/NotFound';
import Devices from "../pages/Devices";
import Scripts from "../pages/Scripts";

export default function Routers(){
    return (
        <Router>
          <Switch>
            <Route exact path='/' component={Navigation}/>
            <Route exact path='/schemes' component={Schemes}/>
            <Route exact path='/scripts' component={Scripts}/>
            <Route exact path='/devices' component={Devices}/>
            <Route path='/404' component={EmptyPage}/>
            <Redirect to='/404'/>
          </Switch>
        </Router>
    );
  }
