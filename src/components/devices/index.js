import React, {Component} from 'react'
import NavigationBar from "../navigation-bar";
import {Col, Container, Row} from "react-bootstrap";
import ElementsBar from "../elements-bar";
import DevicesList from "../Item-list";
import FloatingButtonWithHandler from "../floating-button-handler";
import DevicesModalContainer from "../../containers/devices-modal-container";

export default class Devices extends Component {

    render() {
        return (
            <div className="devices-page">
                <DevicesModalContainer />
                <NavigationBar title='Bomber'/>
                <Container>
                    <ElementsBar/>
                    <Row className="devices-row">
                        <Col className="devices-col">
                            <DevicesList items={this.props.devices}/>
                        </Col>
                        <Col/>
                    </Row>
                    <FloatingButtonWithHandler handler={this.props.onAdd}/>
                </Container>
            </div>
        )
    }
}