import React, {Component} from 'react'
import NavigationBar from "../../components/navigation-bar";
import ElementsBar from "../../components/elements-bar";
import Container from "react-bootstrap/Container";
import FloatingButton from "../script";
import scriptImage from "../../assets/codepunk-logo-2018-square-black.png";
import GridWrapper from "../../components/grid/GridWrapper";
import * as FormsFunmctions from '../../store/forms/actions'
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import FormCreateModal from "../../components/form-create-modal";


class TestForms extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="test-forms-page">
                <NavigationBar title='Bomber'/>
                <FormCreateModal
                    show={this.props.formStore.isOpen}
                    onHide={() => this.props.formsFunctions.toggleCreateModal()}
                />
                <Container>
                    <ElementsBar/>
                    <FloatingButton link="/forms" onClick={() => this.props.scriptsFunctions.toggleCreateModal()}/>
                    <GridWrapper img={scriptImage} items={this.props.scriptsStore.scripts}/>
                </Container>
            </div>
        )
    }
}

function GlobalStateToProps(state) {
    return {
        formStore: state.SC_formsState,
    }
}

function DispatchActionsToProps(dispatch) {
    return {
        formsFunctions: bindActionCreators(FormsFunmctions, dispatch)
    }
}

export default connect(GlobalStateToProps, DispatchActionsToProps)(TestForms)
