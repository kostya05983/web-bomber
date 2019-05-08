import {Component} from 'react';
import Alert from "react-s-alert";
import React from "react";
import {connect} from 'react-redux';
import * as SignUpSelectors from '../../store/SignUpForm/reducer'
import * as SignUpActions from '../../store/SignUpForm/actions'
import * as AuthActions from '../../store/Auth/actions'

/**
 * SignUp form for input name, email, password
 * @author kostya05983
 */
class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputName = this.handleInputName.bind(this);
        this.handleInputEmail = this.handleInputEmail.bind(this);
        this.handleInputPassword = this.handleInputPassword.bind(this);
    }

    handleInputName(event) {
        const target = event.target;
        this.props.dispatch(SignUpActions.inputName(target.value))
    }

    handleInputEmail(event) {
        const target = event.target;
        this.props.dispatch(SignUpActions.inputEmail(target.value))
    }

    handleInputPassword(event) {
        const target = event.target;
        this.props.dispatch(SignUpActions.inputPassword(target.value))
    }

    handleSubmit(event) {
        event.preventDefault();

        const signUpRequest = Object.assign({}, this.props);
        console.log("Request",signUpRequest)
        this.props.dispatch(AuthActions.signup(signUpRequest))
        // this.props.dispatch(AuthActions.signup(signUpRequest)
        //     .then(response => {
        //         console.log("SingUp");
        //         Alert.success("You're successfully registered. Please login to continue!");
        //         this.props.history.push("/login");
        //     }).catch(error => {
        //         Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        //     }));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input type="text" name="name"
                           className="form-control" placeholder="Name"
                           value={this.props.name} onChange={this.handleInputName} required/>
                </div>
                <div className="form-item">
                    <input type="email" name="email"
                           className="form-control" placeholder="Email"
                           value={this.props.email} onChange={this.handleInputEmail} required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password"
                           className="form-control" placeholder="Password"
                           value={this.props.password} onChange={this.handleInputPassword} required/>
                </div>
                <div className="form-item">
                    <button type="submit" className="btn btn-block btn-primary">Sign Up</button>
                </div>
            </form>

        );
    }
}

function MapStateToProps(state) {
    return {
        name: SignUpSelectors.getName(state),
        email: SignUpSelectors.getEmail(state),
        password: SignUpSelectors.getPassword(state)
    }
}

export default connect(MapStateToProps)(SignupForm)