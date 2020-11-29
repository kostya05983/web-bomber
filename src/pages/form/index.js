import React, {Component} from 'react'
import NavigationBar from "../../components/navigation-bar";
import Container from "react-bootstrap/Container";
import ElementsBar from "../../components/elements-bar";
import RunButton from '../../components/run-button'
import {bindActionCreators} from "redux/es/redux";
import * as FormsFunmctions from '../../store/forms/actions'
import * as ResultsFunctions from '../../store/results/actions'
import connect from "react-redux/es/connect/connect";


class FormPage extends Component {
    componentDidMount() {
        this.props.resultsFunctions.getResults(this.props.match.params.formId)
    }

    render() {
        return (
            <div className="test-forms-page">
                <NavigationBar title='Bomber'/>
                <Container>
                    <ElementsBar/>
                    <RunButton link="/forms"
                               onClick={() => this.props.formsFunctions.runForm(this.props.match.params.formId)}/>
                </Container>
            </div>
        )
    }
}

function GlobalStateToProps(state) {
    return {
        resultStore: state.RS_resultState
    }
}

function DispatchActionsToProps(dispatch) {
    return {
        formsFunctions: bindActionCreators(FormsFunmctions, dispatch),
        resultsFunctions: bindActionCreators(ResultsFunctions, dispatch)
    }
}

export default connect(GlobalStateToProps, DispatchActionsToProps)(FormPage)
