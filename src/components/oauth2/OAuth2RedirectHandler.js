import React, {Component} from 'react';
import {ACCESS_TOKEN} from '../../services/constants';
import {Redirect} from 'react-router-dom'
import * as AuthActions from '../../store/Auth/actions'
import {connect} from 'react-redux'
import autoBind from "react-autobind";

class OAuth2RedirectHandler extends Component {
    constructor(props) {
        super(props);
        autoBind(this)
    }

    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render() {
        const token = this.getUrlParameter('token');
        const error = this.getUrlParameter('error');

        console.log("Oauth redirect", token);
        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            this.props.dispatch(AuthActions.inverseAuthenticated());
            return <Redirect to={{
                pathname: "/",
                state: {from: this.props.location}
            }}/>;
        } else {
            return <Redirect to={{
                pathname: "/login",
                state: {
                    from: this.props.location,
                    error: error
                }
            }}/>;
        }
    }
}

export default connect()(OAuth2RedirectHandler)