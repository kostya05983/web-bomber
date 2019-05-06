import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import PrivateRoute from 'PrivateRouter'

//Pages
import Navigation from '../pages/Navigation';
import Schemes from '../pages/Schemes';
import EmptyPage from '../pages/NotFound';

export default function Routers() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Navigation}/>
                <PrivateRoute exact path='/schemes' component={Schemes}/>
                <PrivateRoute path='/404' component={EmptyPage}/>
                <Route path='/login' component={Login}/>
                <Redirect to='/404'/>
            </Switch>
        </Router>
    );
}
