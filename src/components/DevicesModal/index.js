import React, {Component} from 'react'
import {Button, Form, Modal} from "react-bootstrap";

export default class DevicesModal extends Component {

    render() {
        return (
            <Modal
                size="sm"
                aria-labeledby="contained-modal-title-vcenter"
                centered
                show={this.props.isOpen}
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Device compilation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput">
                            <Form.Label>Device name</Form.Label>
                            <Form.Control placeHolder="Device"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput">
                            <Form.Label>Ip address</Form.Label>
                            <Form.Control placeHolder="Ip address"/>
                        </Form.Group>
                    </Form>
                    <Modal.Footer>
                        <Button variant="success" onClick={this.props.onHide}></Button>
                        <Button variant="secondary" onClick={this.props.onHide}>Cancel</Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        )
    }
}