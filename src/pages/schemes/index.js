import React, {Component} from 'react';
import {
    Container,
} from 'react-bootstrap';

import {connect} from 'react-redux';
import * as SchemesFunctions from '../../store/schemes/actions'
import NavigationBar from "../../components/navigation-bar";
import ElementsBar from "../../components/elements-bar";
import FloatingButton from "../../components/floating-button";
import GridWrapper from "../../components/grid/GridWrapper";
import SchemeCreateModal from "../../components/scheme-create-modal";
import {bindActionCreators} from "redux";
import schemeImage from '../../assets/Editing-Drafting-Compass-icon.png'

class Schemes extends Component {

    constructor(props) {
        super(props);
        this.createSchema = this.createSchema.bind(this);
    }

    componentDidMount() {
        this.props.schemesFunctions.getSchemes(0, 100)
    }

    createSchema(schema) {
        this.props.schemesFunctions.createSchema(schema);
    }

    render() {
        return (
            <div className="scheme-page">
                <NavigationBar title='Bomber'/>
                <SchemeCreateModal
                    show={this.props.schemesStore.isOpen}
                    addfunc={(schema) => {
                        this.createSchema(schema);
                        this.props.schemesFunctions.toggleCreateModal();
                    }}
                    onHide={() => {
                        this.props.schemesFunctions.toggleCreateModal();
                    }}
                />
                <Container>
                    <ElementsBar/>
                    <FloatingButton link="/schemes" onClick={() => this.props.schemesFunctions.toggleCreateModal()}/>
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
