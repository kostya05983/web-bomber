import React, {Component} from 'react'

import * as SchemesActions from '../../store/Schemes/actions'

import SchemesPage from '../../pages/Schemes'
import {bindActionCreators} from "redux";

import {connect} from 'react-redux';

/**
 * Schemes container contains grid or modal window
 * @author kostya05983
 */
class SchemesContainer extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isLoading: true,
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <SchemesPage/>
        )
    }
}

function GlobalStoreToProps(state) {
    return {
        schemesStore: state
    }
}

function DispatchActionsToProps(dispatch) {
    return {
        schemesActions: bindActionCreators(SchemesActions, dispatch)
    }
}

export default connect(GlobalStoreToProps, DispatchActionsToProps)(SchemesContainer)
