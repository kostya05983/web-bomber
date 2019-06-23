import React, {Component} from 'react';
import {
    Container,
} from 'react-bootstrap';

import {connect} from 'react-redux';
import * as SchemesFunctions from '../store/Schemes/actions'
import NavigationBar from "../components/NavigationBar";
import ElementsBar from "../components/ElementsBar/ElementsBar";
import FloatingButton from "../components/FloatingButton/FloatingButton";
import GridWrapper from "../components/Grid/GridWrapper";
import SchemeCreateModal from "../components/SchemeCreateModal/SchemeCreateModal";
import {bindActionCreators} from "redux";
import schemeImage from '../assets/Editing-Drafting-Compass-icon.png'

class Schemes extends Component {

    componentDidMount() {
        this.props.schemesFunctions.fetchedSchemes(0, 100)
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <div className="scheme-page">
                <NavigationBar title='Bomber'/>
                <SchemeCreateModal
                    show={this.state.modalShow}
                    onHide={modalClose}
                />
                <Container>
                    <ElementsBar/>
                    <FloatingButton link="/schemes" onClick={() => this.setState({ modalShow: true })}/>
                    <GridWrapper img={schemeImage} items={this.props.schemesStore.schemes}/>
                </Container>
            </div>
        );
    }
}

function GlobalStateToProps(state) {
    return {
        schemesStore: state.SC_schemesState,
    }
}

function DispatchActionsToProps(dispatch) {
    return {
        schemesFunctions: bindActionCreators(SchemesFunctions, dispatch)
    }
}

export default connect(GlobalStateToProps, DispatchActionsToProps)(Schemes);