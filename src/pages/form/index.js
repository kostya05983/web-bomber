import React, {Component} from 'react'
import NavigationBar from "../../components/navigation-bar";
import Container from "react-bootstrap/Container";
import ElementsBar from "../../components/elements-bar";
import RunButton from '../../components/run-button'
import {bindActionCreators} from "redux/es/redux";
import * as FormsFunmctions from '../../store/forms/actions'
import * as ResultsFunctions from '../../store/results/actions'
import connect from "react-redux/es/connect/connect";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import bombImage from "../../assets/bomb.png";
import {logger} from "redux-logger/src";


class FormPage extends Component {
    componentDidMount() {
        this.props.resultsFunctions.getResults(this.props.match.params.formId)
        this.formStatuses = this.formStatuses.bind(this);
    }

    formResults() {
        var func = this.formStatuses;
        return (<CardGroup>
                {this.props.resultStore.results.map(function (item) {
                    console.log("item data", item)
                    return <Card>
                        <Card.Img variant="top" src={bombImage}/>
                        <Card.Body>
                            <Card.Title>Bomber {item.bomberIp}</Card.Title>
                            <Card.Text>
                                amountTimeoutsRequests {item.amountTimeoutsRequests}
                                <br/>
                                amountPerStatus {func(item.amountPerStatus)}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                })
                }
            </CardGroup>
        )
    }

    formStatuses(dict) {
        console.log("dictionary", dict);
        var filtered = Object.keys(dict).reduce(function (filtered, key) {
            if (key !== 0) filtered[key] = dict[key];
            return filtered;
        }, {});
        var str = "";
        Object.keys(filtered).forEach(function (key) {
            str += key + ":" + filtered[key];
            str += "\n";
        })
    }

    render() {
        return (
            <div className="test-forms-page">
                <NavigationBar title='Bomber'/>
                <Container>
                    <ElementsBar/>
                    <RunButton link="/forms"
                               onClick={() => this.props.formsFunctions.runForm(this.props.match.params.formId)}/>
                    {this.formResults()}
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
