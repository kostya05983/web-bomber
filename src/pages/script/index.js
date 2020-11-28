import React, {Component} from 'react';
import {
    Container,
} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as ScriptsFunctions from '../../store/scripts/actions'

import NavigationBar from "../../components/navigation-bar";
import ElementsBar from "../../components/elements-bar";
import FloatingButton from "../../components/floating-button";
import GridWrapper from "../../components/grid/GridWrapper";
import ScriptCreateModal from "../../components/script-create-modal";

import {bindActionCreators} from "redux";
import scriptImage from '../../assets/codepunk-logo-2018-square-black.png'


class Scripts extends Component {

    componentDidMount() {
        this.props.scriptsFunctions.getScripts(0, 100)
    }

    render() {
        return (
            <div className="scripts-page">
                <NavigationBar title='Bomber'/>
                <ScriptCreateModal
                    show={this.props.scriptsStore.isOpen}
                    onHide={() => this.props.scriptsFunctions.toggleCreateModal()}
                    addFunc={(script) => {
                        this.props.scriptsFunctions.createScript(script);
                        this.props.scriptsFunctions.toggleCreateModal()
                    }}
                />
                <Container>
                    <ElementsBar/>
                    <FloatingButton link="/scripts" onClick={() => this.props.scriptsFunctions.toggleCreateModal()}/>
                    <GridWrapper img={scriptImage} items={this.props.scriptsStore.scripts}/>
                </Container>
            </div>
        );
    }
}

function GlobalStateToProps(state) {
    return {
        scriptsStore: state.SC_scriptsState,
    }
}

function DispatchActionsToProps(dispatch) {
    return {
        scriptsFunctions: bindActionCreators(ScriptsFunctions, dispatch)
    }
}

export default connect(GlobalStateToProps, DispatchActionsToProps)(Scripts)
