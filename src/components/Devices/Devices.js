import React, {Component} from 'react'
import NavigationBar from "../NavigationBar";
import {Col, Container, Row} from "react-bootstrap";
import ElementsBar from "../ElementsBar/ElementsBar";
import DevicesList from "../ItemList/ItemList";
import FloatingButtonWithHandler from "../FloatingButtonHandler/FloatingButtonHandler";
import DevicesModalContainer from "../../containers/devicesModalContainer";

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