import React, {Component} from 'react';
import {
    Container,
} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as ScriptsFunctions from '../store/Scripts/actions'

import NavigationBar from "../components/NavigationBar";
import ElementsBar from "../components/ElementsBar/ElementsBar";
import FloatingButton from "../components/FloatingButton/FloatingButton";
import GridWrapper from "../components/Grid/GridWrapper";
import {bindActionCreators} from "redux";
import scriptImage from '../assets/codepunk-logo-2018-square-black.png'


class Scripts extends Component {

    componentDidMount() {
        this.props.scriptsFunctions.fetchedScripts(0, 100)
    }

    render() {
        return (
            <div className="scripts-page">
                <NavigationBar title='Bomber'/>
                <Container>
                    <ElementsBar/>
                    <FloatingButton link="/scripts"/>
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