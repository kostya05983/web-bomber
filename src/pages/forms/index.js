import React, {Component} from 'react'
import NavigationBar from "../../components/navigation-bar";
import Container from "react-bootstrap/Container";
import ElementsBar from "../../components/elements-bar";
import FloatingButton from "../../components/floating-button";
import GridWrapper from "../../components/grid/GridWrapper";
import bombImage from "../../assets/bomb.png";

import * as FormsFunmctions from '../../store/forms/actions'
import * as ScriptFunctions from '../../store/scripts/actions'
import * as SchemesFunctions from '../../store/schemes/actions'
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import FormCreateModal from "../../components/form-create-modal";


class TestForms extends Component {
    componentDidMount() {
        this.props.formsFunctions.getForms(0, 1000);
        this.props.schemesFunctions.getSchemes(0, 1000);
        this.props.scriptsFunctions.getScripts(0, 1000)
    }

    render() {
        return (
            <div className="test-forms-page">
                <NavigationBar title='Bomber'/>
                <FormCreateModal
                    show={this.props.formStore.isOpen}
                    addFunc={(form) => this.props.formsFunctions.addForm(form)}
                    schemes={this.props.schemesStore.schemes}
                    scripts={this.props.scriptStore.scripts}
                    onHide={() => this.props.formsFunctions.toggleCreateModal()}
                />
                <Container>
                    <ElementsBar/>
                    <FloatingButton link="/forms" onClick={() => this.props.formsFunctions.toggleCreateModal()}/>
                    <GridWrapper img={bombImage} items={this.props.formStore.forms}/>
                </Container>
            </div>
        )
    }
}

function GlobalStateToProps(state) {
    return {
        formStore: state.SC_formsState,
        schemesStore: state.SC_schemesState,
        scriptStore: state.SC_scriptsState
    }
}

function DispatchActionsToProps(dispatch) {
    return {
        formsFunctions: bindActionCreators(FormsFunmctions, dispatch),
        schemesFunctions: bindActionCreators(SchemesFunctions, dispatch),
        scriptsFunctions: bindActionCreators(ScriptFunctions, dispatch)
    }
}

export default connect(GlobalStateToProps, DispatchActionsToProps)(TestForms)
