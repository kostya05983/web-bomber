import {Component} from 'react';
import React from 'react';
import * as AuthActions from "../../store/Auth/actions";
import Alert from "react-s-alert";
import {ACCESS_TOKEN} from "../../services/constants";
import * as LoginFormActions from '../../store/LoginForm/actions';
import {connect} from 'react-redux';
import LoginSelectors from '../../store/LoginForm/reducer'

/**
 * Login form for input password, email, e.t.c
 */
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleInputEmail = this.handleInputEmail(this);
        this.handleInputPassword = this.handleInputPassword(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputEmail(event) {
        const inputValue = event.target.value;
        this.props.dispatch(LoginFormActions.inputEmail(inputValue))
    }

    handleInputPassword(event) {
        const inputValue = event.target.value;
        this.props.dispatch(LoginFormActions.inputPassword(inputValue))
    }

    handleSubmit(event) {
        event.preventDefault();

        const loginRequest = Object.assign({}, this.state);

        AuthActions.login(loginRequest).then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            Alert.success("You're successfully logged in!");

            this.props.history.push("/")
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input type="email" name="email"
                           className="form-control" placeholder="Email"
                           value={this.state.email} onChange={this.handleInputEmail} required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password"
                           className="form-control" placeholder="Password"
                           value={this.state.password} onChange={this.handleInputPassword} required/>
                </div>
                <div className="form-item">
                    <button type="submit" className="btn btn-block btn-primary">Login</button>
                </div>
            </form>
        );
    }
}

function MapStateToProps(state) {
    return {
        email: LoginSelectors.email,
        password: LoginSelectors.password
    }
}

export default connect(MapStateToProps)(LoginForm)