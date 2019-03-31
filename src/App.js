import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import NavPage from './pages/navPage';
import SchemePage from './pages/schemePage';
import EmptyPage from './pages/index';

class App extends Component {

  render() {
    return (
        <Router>
          <Switch>
            <Route exact path='/' component={NavPage}/>
            <Route exact path='/schemes' component={SchemePage}/>
            <Route path='/404' component={EmptyPage}/>
            <Redirect to='/404'/>
          </Switch>
        </Router>
    );
  }
}

export default App;
