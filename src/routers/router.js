import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import PrivateRoute from './PrivateRouter'

import Navigation from '../pages/navigation';
import EmptyPage from '../pages/not-found';
import Login from '../components/login/index.js'
import Signup from "../components/sign-up";
import OAuth2RedirectHandler from "../components/oauth2";
import Devices from "../containers/devices";
import Scripts from "../pages/script";
import Schemes from "../pages/schemes";

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
