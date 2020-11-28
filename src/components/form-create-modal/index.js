import React from "react";
import {Modal, Button, Form} from "react-bootstrap";


class FormCreateModal extends React.Component {

    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSchemeChange = this.handleSchemeChange.bind(this);
        this.handleScriptChange = this.handleScriptChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleSchemeChange(e) {
        this.setState({
            schemeId: e.target.value
        })
    }

    handleScriptChange(e) {
        console.log("ScriptChange", e.target.value)
        this.setState({
            scriptId: e.target.value
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
                        Form creation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput">
                            <Form.Label>Form name</Form.Label>
                            <Form.Control placeholder="Name" onChange={this.handleNameChange}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Schema</Form.Label>
                            <Form.Control as="select" onSelect={this.handleSchemeChange}
                                          onChange={this.handleSchemeChange}>
                                {this.props.schemes.map(t => <option value={t.id}>{t.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Script</Form.Label>
                            <Form.Control as="select" onSelect={this.handleScriptChange}
                                          onChange={this.handleScriptChange}
                            >
                                {this.props.scripts.map(t => <option value={t.id}>{t.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        this.props.addFunc({
                            name: this.state.name,
                            schemeId: this.state.schemeId,
                            scriptId: this.state.scriptId
                        });
                        this.props.onHide()
                    }}>Create</Button>
                    <Button variant="secondary" onClick={this.props.onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default FormCreateModal
