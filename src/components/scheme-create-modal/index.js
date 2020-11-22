import React from 'react';
import {Modal, Button, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import InputKeyValueComponent from "../header-input";

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
                0: {
                    key: "",
                    value: ""
                }
            },
            pathVariables: {
                0: {
                    key: "",
                    value: ""
                }
            },
            requestParams: {
                0: {
                    key: "",
                    value: ""
                }
            }
        };
        this.createKeyValueElements = this.createKeyValueElements.bind(this);
        this.updateHeader = this.updateHeader.bind(this);
        this.updatePathVariable = this.updatePathVariable.bind(this);
        this.updateRequestParam = this.updateRequestParam.bind(this);
        this.addHeader = this.addHeader.bind(this);
        this.addPathVariable = this.addPathVariable.bind(this);
        this.addRequestParam = this.addRequestParam.bind(this);
    }

    createKeyValueElements(storedElement, func) {
        return Object.entries(storedElement).map(([key, value]) => {
            return (
                <InputKeyValueComponent props={
                    {
                        key: value.key,
                        value: value.value
                    }
                } handleChange={func}/>
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

    updatePathVariable(index, key, value) {
        const pathVariables = this.state.pathVariables;
        pathVariables[index] = {
            key: key,
            value: value
        };
        this.setState({
            pathVariables: {
                ...pathVariables
            }
        })
    }

    updateRequestParam(index, key, value) {
        const requestParams = this.state.requestParams;
        requestParams[index] = {
            key: key,
            value: value
        };
        this.setState({
            requestParams: {
                ...requestParams
            }
        })
    }

    addHeader() {
        const size = Object.keys(this.state.headers).length;
        const headers = this.state.headers;
        headers[size] = {
            key: "",
            value: ""
        };
        this.setState({
            headers: {
                ...headers
            }
        })
    }

    addPathVariable() {
        const size = Object.keys(this.state.headers).length;
        const pathVariables = this.state.headers;
        pathVariables[size] = {
            key: "",
            value: ""
        };
        this.setState({
            pathVariables: {
                ...pathVariables
            }
        })
    }

    addRequestParam() {
        const size = Object.keys(this.state.headers).length;
        const requestParams = this.state.headers;
        requestParams[size] = {
            key: "",
            value: ""
        };
        this.setState({
            requestParams: {
                ...requestParams
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
                            {this.createKeyValueElements(this.state.headers, this.updateHeader)}
                            <div className="text-center">
                                <Button variant="info" onClick={this.addHeader}>Add</Button>
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Path variables</Form.Label>
                            {this.createKeyValueElements(this.state.pathVariables, this.updatePathVariable)}
                            <div className="text-center">
                                <Button variant="info" onClick={this.addPathVariable}>Add</Button>
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Request params</Form.Label>
                            {this.createKeyValueElements(this.state.requestParams, this.updateRequestParam)}
                            <div className="text-center">
                                <Button variant="info" onClick={this.addRequestParam}>Add</Button>
                            </div>
                        </Form.Group>
                        <Form.Group>

                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput">
                            <Form.Label>Scheme name</Form.Label>

                            <Form.Control placeholder="name"/>
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
                    <Button variant="success" >Create</Button>
                    <Button variant="secondary" onClick={this.props.onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default SchemeCreateModal
