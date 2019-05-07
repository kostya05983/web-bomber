import React, {Component} from 'react';
import './Login.css';
import {Link, Redirect} from 'react-router-dom'
import Alert from 'react-s-alert';
import {connect} from 'react-redux'
import autoBind from "react-autobind";
import * as AuthSelectors from '../../store/Auth/reducer'
import SocialLogin from '../SocialLogin/SocialLogin'
import LoginForm from '../LoginForm/LoginForm'

/**
 * Login Component
 * @author kostya05983
 */
class Login extends Component {

    constructor(props) {
        super(props);
        autoBind(this)
    }

    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if (this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }

    render() {
        if (this.props.isAuthenticated) {
            console.log(this.props);
            return <Redirect
                to={{
                    pathname: "/",
                    state: {from: this.props.location}
                }}/>;
        }

        return (
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Login to Bomber</h1>
                    <SocialLogin/>
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <LoginForm {...this.props} />
                    <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
                </div>
            </div>
        );
    }
}

function MapStateToProps(state) {
    return {
        isAuthenticated: AuthSelectors.isAuthenticated(state)
    }
}

export default connect(MapStateToProps)(Login)