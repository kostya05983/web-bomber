import React from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";

import * as AuthSelectors from '../store/Auth/reducer'
import {connect} from 'react-redux';


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            this.props.isAuthenticated ? (
                <Component {...rest} {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: {from: props.location}
                    }}
                />
            )
        }
    />
);

function MapStateToProps(state) {
    return {
        isAuthenticated: AuthSelectors.isAuthenticated(state)
    }
}

export default connect(MapStateToProps)(PrivateRoute);