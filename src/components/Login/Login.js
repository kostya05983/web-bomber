import React, {Component} from 'react';
import './Login.css';
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import SocialLogin from '../SocialLogin/SocialLogin'
import LoginForm from '../LoginForm/LoginForm'

/**
 * Login Component
 * @author kostya05983
 */
class Login extends Component {

    render() {
        console.log(this.props);
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
        isAuthenticated: state.AU_authState.isAuthenticated
    }
}

export default connect(MapStateToProps)(Login)