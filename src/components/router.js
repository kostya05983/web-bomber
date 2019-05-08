import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import PrivateRoute from './PrivateRouter'

import Navigation from '../pages/Navigation';
import Schemes from '../pages/Schemes';
import EmptyPage from '../pages/NotFound';
import Login from './Login/Login.js'
import Signup from "./SignUp/SignUp";

export default function Routers() {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path='/' component={Navigation}/>
                <PrivateRoute exact path='/schemes' component={Schemes}/>
                <PrivateRoute path='/404' component={EmptyPage}/>
                <Route path='/login'><Login/></Route>
                <Route path='/signup'> <Signup/></Route>

                <Redirect to='/404'/>
            </Switch>
        </Router>
    );
}
