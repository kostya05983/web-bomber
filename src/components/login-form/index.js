import {Component} from 'react';
import React from 'react';
import * as AuthFunctions from "../../store/Auth/actions";
import * as LoginFunctions from '../../store/LoginForm/actions'
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

/**
 * login form for input password, email, e.t.c
 */
class LoginForm extends Component {

    handleInput(event) {
        const target = event.target;
        let action = target.getAttribute("action");
        switch (action) {
            case "email":
                this.props.loginFunctions.inputEmail(target.value);
                break;
            case "password":
                this.props.loginFunctions.inputPassword(target.value);
                break;
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        const loginRequest = Object.assign({}, this.props);
        console.log("LoginRequest", loginRequest);
        this.props.authFunctions.login(loginRequest);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-item">
                    <input type="email" name="email"
                           action="email"
                           className="form-control" placeholder="Email"
                           value={this.props.email} onChange={this.handleInput.bind(this)} required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password"
                           action="password"
                           className="form-control" placeholder="Password"
                           value={this.props.password} onChange={this.handleInput.bind(this)} required/>
                </div>
                <div className="form-item">
                    <button type="submit" className="btn btn-block btn-primary">Login</button>
                </div>
            </form>
        );
    }
}

function DispatchActionsToProps(dispatch) {
    return {
        loginFunctions: bindActionCreators(LoginFunctions, dispatch),
        authFunctions: bindActionCreators(AuthFunctions, dispatch)
    }
}


function MapStateToProps(state) {
    return {
        email: state.LF_loginState.email,
        password: state.LF_loginState.password
    }
}

export default connect(MapStateToProps, DispatchActionsToProps)(LoginForm)