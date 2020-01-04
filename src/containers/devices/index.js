import React, {Component} from 'react';
import * as NavFunctions from '../../store/navigation-part/actions';
import * as DevicesFunctions from '../../store/devices/actions';
import * as DevicesModalFunctions from '../../store/devices-modal/actions'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Devices from "../../components/devices";

class DevicesContainer extends Component {

    componentDidMount() {
        this.props.devicesFunctions.fetchedDevices(0, 100);
    }

    handler(event) {
        console.log("Click")
        this.props.deviceModalFunctions.setIsOpen(true)
    }

    render() {
        console.log("Store", this.props.deviceStore.devices);
        return (
            <Devices onAdd={this.handler.bind(this)} devices={this.props.deviceStore.devices}/>
        );
    }
}

function GlobalStateToProps(state) {
    return {
        navStore: state.NS_navigationState,
        deviceStore: state.DE_devicesState,
    }
}

function DispatchActionsToProps(dispatch) {
    return {
        navFunctions: bindActionCreators(NavFunctions, dispatch),
        devicesFunctions: bindActionCreators(DevicesFunctions, dispatch),
        deviceModalFunctions: bindActionCreators(DevicesModalFunctions, dispatch)
    }
}

export default connect(GlobalStateToProps, DispatchActionsToProps)(DevicesContainer);
