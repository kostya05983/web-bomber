import {Component} from 'react';
import React from "react";
import {connect} from 'react-redux';
import * as SignUpFunctions from '../../store/sign-up-form/actions'
import * as AuthFunctions from '../../store/Auth/actions'
import {bindActionCreators} from "redux";

/**
 * sign-up form for input name, email, password
 * @author kostya05983
 */
class SignupForm extends Component {

    handleInput(event) {
        const target = event.target;
        let action = target.getAttribute("action");
        switch (action) {
            case "name":
                this.props.signUpFunctions.inputName(target.value);
                break;
            case "email":
                this.props.signUpFunctions.inputEmail(target.value);
                break;
            case "password":
                this.props.signUpFunctions.inputPassword(target.value);
                break;
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        const signUpRequest = Object.assign({}, this.props);
        console.log("Request", signUpRequest);
        this.props.authFunctions.signup(signUpRequest);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-item">
                    <input type="text" name="name"
                           action="name"
                           className="form-control" placeholder="Name"
                           value={this.props.name} onChange={this.handleInput.bind(this)} required/>
                </div>
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
                    <button type="submit" className="btn btn-block btn-primary">Sign Up</button>
                </div>
            </form>

        );
    }
}

function DispatchActionsToProps(dispatch) {
    return {
        signUpFunctions: bindActionCreators(SignUpFunctions, dispatch),
        authFunctions: bindActionCreators(AuthFunctions, dispatch)
    }
}

function MapStateToProps(state) {
    return {
        name: state.SU_signUpState.name,
        email: state.SU_signUpState.email,
        password: state.SU_signUpState.password
    }
}

export default connect(MapStateToProps, DispatchActionsToProps)(SignupForm)
