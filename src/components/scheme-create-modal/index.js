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
        console.log("call constructor of modal");
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
            },
            body: ""
        };
        this.createKeyValueElements = this.createKeyValueElements.bind(this);
        this.updateHeader = this.updateHeader.bind(this);
        this.updatePathVariable = this.updatePathVariable.bind(this);
        this.updateRequestParam = this.updateRequestParam.bind(this);
        this.addHeader = this.addHeader.bind(this);
        this.addPathVariable = this.addPathVariable.bind(this);
        this.addRequestParam = this.addRequestParam.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);

        this.unwrapDictionary = this.unwrapDictionary.bind(this);
        this.setName = this.setName.bind(this);
    }

    createKeyValueElements(storedElement, func) {
        return Object.entries(storedElement).map(([index, value]) => {
            console.log("entry", value.key)
            return (
                <InputKeyValueComponent
                    index={index}
                    dictKey={value.key}
                    value={value.value}
                    handleChange={func}
                />
            );
        })
    }


    updateHeader(index, key, value) {
        const headers = this.state.headers;
        console.log("index of update", index);
        headers[index] = {
            key: key,
            value: value
        };
        console.log("New headers", headers);
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

    handleBodyChange(e) {
        const body = e.target.value;
        console.log("body", body);
        this.setState({
            body: body
        })
    }

    unwrapDictionary(dict) {
        let result = {};
        Object.keys(dict).filter(function (key) {
            return key.length !== 0
        }).forEach(function (key) {
            const entry = dict[key];
            console.log("entry", entry);
            let newKey = entry.key;
            console.log("key", newKey);
            result = {
                ...result,
                [newKey]: entry.value
            }
        });
        console.log("headers", result);
        return result;
    }

    unwrapRequestParams(dict) {
        let result = [];
        Object.keys(dict).filter(function (key) {
            return key.length !== 0
        }).forEach(function (key) {
            const entry = dict[key];
            console.log("entry", entry);
            let newKey = entry.key;
            console.log("key", newKey);
            let newRequestParam = {
                name: newKey,
                value: entry.value,
                isGeneratorNeed: false
            };
            result.push(newRequestParam);
        });
        console.log("headers", result);
        return result;
    }

    setName(e) {
        const name = e.target.value;
        this.setState({
            name: name
        })
    }

    render() {
        return (
            <Modal
                show={this.props.show}
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

                            <Form.Control placeholder="name" onChange={this.setName} value={this.state.name}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect">
                            <Form.Label>Method</Form.Label>
                            <Form.Control as="select">
                                {methods.map(m => <option>{m.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows="3" value={this.state.body}
                                          onChange={this.handleBodyChange}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        this.props.addfunc(
                            {
                                name: this.state.name,
                                headers: this.unwrapDictionary(this.state.headers),
                                pathVariables: this.unwrapDictionary(this.state.pathVariables),
                                requestParams: this.unwrapRequestParams(this.state.requestParams),
                                body: this.state.body
                            }
                        );
                    }}>Create</Button>
                    <Button variant="secondary" onClick={this.props.onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default SchemeCreateModal;
