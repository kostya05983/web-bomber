import {Component} from 'react';
import React from "react";
import {connect} from 'react-redux';
import * as SignUpFunctions from '../../store/SignUpForm/actions'
import * as AuthFunctions from '../../store/Auth/actions'
import {bindActionCreators} from "redux";

/**
 * SignUp form for input name, email, password
 * @author kostya05983
 */
class SignupForm extends Component {
    handleInputName(event) {
        const target = event.target;
        this.props.signUpFunctions.inputName(target.value);
    }

    handleInputEmail(event) {
        const target = event.target;
        this.props.signUpFunctions.inputEmail(target.value);
    }

    handleInputPassword(event) {
        const target = event.target;
        this.props.signUpFunctions.inputPassword(target.value);
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
                           className="form-control" placeholder="Name"
                           value={this.props.name} onChange={this.handleInputName.bind(this)} required/>
                </div>
                <div className="form-item">
                    <input type="email" name="email"
                           className="form-control" placeholder="Email"
                           value={this.props.email} onChange={this.handleInputEmail.bind(this)} required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password"
                           className="form-control" placeholder="Password"
                           value={this.props.password} onChange={this.handleInputPassword.bind(this)} required/>
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