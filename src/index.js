import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Routers from './components/router';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import configureStore from './store/index';

ReactDOM.render(
<Provider store={configureStore()}>
    <Routers />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
