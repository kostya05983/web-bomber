import {combineReducers} from 'redux';

// Navigation part
import NS_navigationState from '../NavigationPart/reducer';
import AU_authState from '../Auth/reducer'
import LF_loginState from '../LoginForm/reducer'
import SU_signUpState from '../SignUpForm/reducer'
import DE_devicesState from '../Devices/reducer'
import SC_schemesState from '../Schemes/reducer'
import SC_scriptsState from '../Scripts/reducer'

export default combineReducers({
    NS_navigationState,
    AU_authState,
    LF_loginState,
    SU_signUpState,
    DE_devicesState,
    SC_schemesState,
    SC_scriptsState
})