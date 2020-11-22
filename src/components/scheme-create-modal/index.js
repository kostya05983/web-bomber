import React from 'react';
import {Modal, Button, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import InputHeaderComponent from "../header-input";

const methods = [
    {name: 'GET'},
    {name: 'POST'},
    {name: 'PUT'},
    {name: 'PATCH'},
    {name: 'DELETE'}
];

class SchemeCreateModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: {
                1: {
                    key: "",
                    value: ""
                }
            }
        };
        this.createHeaders = this.createHeaders.bind(this);
        this.updateHeader = this.updateHeader.bind(this);
    }

    createHeaders() {
        return Object.entries(this.state.headers).map(([key, value]) => {
            return (
                <InputHeaderComponent props={
                    {
                        key: value.key,
                        value: value.value
                    }
                } handleChange={this.updateHeader}/>
            );
        })
    }

    updateHeader(index, key, value) {
        const headers = this.state.headers;
        headers[index] = {
            key: key,
            value: value
        };
        this.setState({
            headers: {
                ...headers
            }
        })

    }


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
                        <Form.Group>
                            <Form.Label>Headers</Form.Label>
                            {this.createHeaders()}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Path variables</Form.Label>
                            <InputGroup>
                                <Form.Control placeholder="key"/>
                                <Form.Control placeholder="value"/>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>

                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput">
                            <Form.Label>Scheme name</Form.Label>

                            <Form.Control placeholder="Scheme"/>
                            <Form.Control placeholder="Scheme1"/>
                        </Form.Group>
                        <Form.Group controlId="SchemaHeaders">
                            <Form.Label>Headers</Form.Label>

                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect">
                            <Form.Label>Method</Form.Label>
                            <Form.Control as="select">
                                {methods.map(m => <option>{m.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows="3"/>
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
