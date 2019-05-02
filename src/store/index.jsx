import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default function configureStore(initState) {
    const store = createStore(
        rootReducer,
        initState,
        applyMiddleware(thunk, logger)
    )

    if (module.hot){
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}