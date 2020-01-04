import {combineReducers} from 'redux';

// Navigation part
import NS_navigationState from '../navigation-part/reducer';
import DE_devicesState from '../devices/reducer'
import SC_schemesState from '../schemes/reducer'
import SC_scriptsState from '../scripts/reducer'
import DM_devicesModalState from '../devices-modal/reducer'

export default combineReducers({
    NS_navigationState,
    DE_devicesState,
    SC_schemesState,
    SC_scriptsState,
    DM_devicesModalState
})
