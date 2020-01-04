import {combineReducers} from 'redux';

// Navigation part
import NS_navigationState from '../navigation-part/reducer';
import AU_authState from '../Auth/reducer'
import LF_loginState from '../login-form/reducer'
import SU_signUpState from '../sign-up-form/reducer'
import DE_devicesState from '../devices/reducer'
import SC_schemesState from '../schemes/reducer'
import SC_scriptsState from '../scripts/reducer'
import DM_devicesModalState from '../devices-modal/reducer'

export default combineReducers({
    NS_navigationState,
    AU_authState,
    LF_loginState,
    SU_signUpState,
    DE_devicesState,
    SC_schemesState,
    SC_scriptsState,
    DM_devicesModalState
})
