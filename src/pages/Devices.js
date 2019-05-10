import React, { Component } from 'react';
import NavigationBar from "../components/NavigationBar";

import * as NavFunctions from '../store/NavigationPart/actions';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DevicesList from "../components/ItemList/ItemList";
import {Col, Container, Row} from "react-bootstrap";
import ElementsBar from "../components/ElementsBar/ElementsBar";

const devices = [
    { id: 1, title: "127.0.0.1", subtitle: "asdasd", time:"4:20" },
    { id: 2, title: "127.0.0.1", subtitle: "dsasd", time:"4:20" },
    { id: 3, title: "127.0.0.1", subtitle: "sdasd", time:"4:20" },
    { id: 4, title: "127.0.0.1", subtitle: "daaas", time:"4:20" },
    { id: 5, title: "127.0.0.1", subtitle: "asdasd", time:"4:20" },
    { id: 6, title: "127.0.0.1", subtitle: "dsasd", time:"4:20" },
    { id: 7, title: "127.0.0.1", subtitle: "sdasd", time:"4:20" },
    { id: 8, title: "127.0.0.1", subtitle: "daaas", time:"4:20" }
];

class Devices extends Component {
    render() {
        return(
            <div className="devices-page">
                <NavigationBar title='Bomber'/>
                <Container>
                    <ElementsBar/>
                    <Row className="devices-row">
                        <Col className="devices-col">
                            <DevicesList items={devices}/>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

function GlobalStoreToProps(state){
    return {
        navStore: state.NS_navigationState,
    }
}

function DispatchActionsToProps(dispatch){
    return {
        navFunctions: bindActionCreators(NavFunctions, dispatch)
    }
}

export default connect(GlobalStoreToProps, DispatchActionsToProps)(Devices);