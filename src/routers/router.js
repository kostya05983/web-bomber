import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import PrivateRoute from './PrivateRouter'

import Navigation from '../pages/Navigation';
import EmptyPage from '../pages/NotFound';
import Login from '../components/Login/Login.js'
import Signup from "../components/SignUp/SignUp";
import OAuth2RedirectHandler from "../components/oauth2/OAuth2RedirectHandler";
import Devices from "../pages/DevicesContainer";
import Scripts from "../pages/Scripts";
import Schemes from "../pages/Schemes";

export default function Routers() {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path='/' component={Navigation}/>
                <PrivateRoute path='/404' component={EmptyPage}/>
                <Route path='/login'><Login/></Route>
                <Route path='/signup'> <Signup/></Route>
                <PrivateRoute exact path='/devices' component={Devices}/>
                <PrivateRoute exact path='/schemes' component={Schemes}/>
                <PrivateRoute exact path='/scripts' component={Scripts}/>
                <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
                <Redirect to='/404'/>
            </Switch>
        </Router>
    );
}
