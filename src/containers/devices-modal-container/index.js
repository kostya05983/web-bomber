import React, {Component} from 'react'
import DevicesModal from "../../components/devices-modal";
import * as DevicesModalActions from '../../store/devicesModal/actions'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class DevicesModalContainer extends Component {

    onHide(event) {
        this.props.devicesFunctions.setIsOpen(false)
    }


    render() {
        return (
            <DevicesModal isOpen={this.props.store.isOpen} onHide={this.onHide.bind(this)}/>
        )
    }
}

function GlobalStateToProps(state) {
    return {
        store: state.DM_devicesModalState
    }
}

function DispatchActionsToProps(dispatch) {
    return {
        devicesFunctions: bindActionCreators(DevicesModalActions, dispatch)
    }
}

export default connect(GlobalStateToProps, DispatchActionsToProps)(DevicesModalContainer)

