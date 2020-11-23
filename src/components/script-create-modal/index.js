import React from 'react';
import {Modal, Button, Form} from "react-bootstrap";

const methods = [
    {name: 'GET'},
    {name: 'POST'},
    {name: 'PUT'},
    {name: 'PATCH'},
    {name: 'DELETE'}
];

class ScriptCreateModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            requestMethod: "",
            rps: "",
            time: ""
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleRequestMethodChange = this.handleRequestMethodChange.bind(this);
        this.handleRpsChange = this.handleRpsChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleAddressChange(e) {
        this.setState({
            address: e.target.value
        })
    }

    handleRequestMethodChange(e) {
        this.setState({
            requestMethod: e.target.value
        })
    }

    handleRpsChange(e) {
        this.setState({
            rps: e.target.value
        })
    }

    handleTimeChange(e) {
        this.setState({
            time: e.target.value
        })
    }

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
                            <Form.Control placeholder="Script" onChange={this.handleNameChange}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="address" onChange={this.handleAddressChange}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>RequestMethod</Form.Label>
                            <Form.Control as="select" onSelect={this.handleRequestMethodChange}>
                                {methods.map(t => <option>{t.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Rps</Form.Label>
                            <Form.Control placeholder="rps" onChange={this.handleRpsChange}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Time</Form.Label>
                            <Form.Control placeholder="time" onChange={this.handleTimeChange}/>
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