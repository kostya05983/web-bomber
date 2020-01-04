import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

import Navigation from '../pages/navigation';
import EmptyPage from '../pages/not-found';
import Devices from "../containers/devices";
import Scripts from "../pages/script";
import Schemes from "../pages/schemes";

export default function Routers() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Navigation}/>
                <Route path='/404' component={EmptyPage}/>
                <Route exact path='/devices' component={Devices}/>
                <Route exact path='/schemes' component={Schemes}/>
                <Route exact path='/scripts' component={Scripts}/>
                <Redirect to='/404'/>
            </Switch>
        </Router>
    );
}
