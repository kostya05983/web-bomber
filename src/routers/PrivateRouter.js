import React from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";

import {connect} from 'react-redux';


const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated ? (
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
    console.log("isAuthenticated", state.AU_authState.isAuthenticated);
    return {
        isAuthenticated: state.AU_authState.isAuthenticated
    }
}

export default connect(MapStateToProps)(PrivateRoute);