import React from 'react';
import {Modal, Button, Form} from "react-bootstrap";

const types = [
    { name: 'JSON'}
];

const protocols = [
    { name: 'HTTP'}
];

// TODO: Get schemes from server
const schemes = [
    { name: 'Sample scheme'}
];

// TODO: Get devices list from server
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

class ScriptCreateModal extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Script compilation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput">
                            <Form.Label>Script name</Form.Label>
                            <Form.Control placeholder="Script" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Content-type</Form.Label>
                            <Form.Control as="select">
                                {types.map(t => <option>{t.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Device</Form.Label>
                            <Form.Control as="select">
                                {devices.map(d => <option>{d.subtitle}</option>)}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect3">
                            <Form.Label>Protocol</Form.Label>
                            <Form.Control as="select">
                                {protocols.map(p => <option>{p.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect4">
                            <Form.Label>Scheme</Form.Label>
                            <Form.Control as="select">
                                {schemes.map(s => <option>{s.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={this.props.onHide}>Create</Button>
                    <Button variant="secondary" onClick={this.props.onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ScriptCreateModal