import React, { Component } from 'react';
import {
    Button, Col, Container,
    Form, FormControl,
    Nav,
    Navbar,
    NavDropdown, Row
} from 'react-bootstrap';
import {Link} from "react-router-dom";

class SchemePage extends Component{

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isLoading: true,
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="scheme-page">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">
                        <img
                            alt=" "
                            src="../assets/rocket.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {'Bomber'}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/schemes">Schemes</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-primary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Container className="navpage-container">
                    <Row className="justify-content-md-center pane">
                        <Col md="auto" className="element">
                            <Link to='/' className="option">Link 1</Link>
                        </Col>
                        <Col md="auto" className="element">
                            <Link to='/' className="option">Link 2</Link>
                        </Col>
                        <Col md="auto" className="element">
                            <Link to='/' className="option">Link 3</Link>
                        </Col>
                    </Row>
                </Container>
                <h5>Scheme page</h5>
            </div>
        );
    }
}

export default SchemePage;