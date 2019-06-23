import React from 'react';
import {Modal, Button, Form} from "react-bootstrap";

const methods = [
    { name: 'GET'},
    { name: 'POST'},
    { name: 'PUT'},
    { name: 'PATCH'},
    { name: 'DELETE'}
];

class SchemeCreateModal extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Scheme creating
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput">
                            <Form.Label>Scheme name</Form.Label>
                            <Form.Control placeholder="Scheme" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect">
                            <Form.Label>Method</Form.Label>
                            <Form.Control as="select">
                                {methods.map(m => <option>{m.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows="3" />
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
export default SchemeCreateModal