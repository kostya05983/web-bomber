import React, { Component } from 'react';
import NavigationBar from "../components/NavigationBar";

import * as NavFunctions from '../store/NavigationPart/actions';
import * as DevicesFunctions from '../store/Devices/actions';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DevicesList from "../components/ItemList/ItemList";
import {Col, Container, Row} from "react-bootstrap";
import ElementsBar from "../components/ElementsBar/ElementsBar";


class Devices extends Component {

    componentDidMount() {
        this.props.devicesFunctions.fetchedDevices(0, 100);
    }

    render() {
        console.log("Store", this.props.deviceStore.devices);
        return(
            <div className="devices-page">
                <NavigationBar title='Bomber'/>
                <Container>
                    <ElementsBar/>
                    <Row className="devices-row">
                        <Col className="devices-col">
                            <DevicesList items={this.props.deviceStore.devices}/>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

function GlobalStateToProps(state){
    return {
        navStore: state.NS_navigationState,
        deviceStore: state.DE_devicesState,
    }
}

function DispatchActionsToProps(dispatch){
    return {
        navFunctions: bindActionCreators(NavFunctions, dispatch),
        devicesFunctions: bindActionCreators(DevicesFunctions, dispatch)
    }
}

export default connect(GlobalStateToProps, DispatchActionsToProps)(Devices);