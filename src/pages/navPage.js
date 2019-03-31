import React, { Component } from 'react';
import {
    Button, Card, CardDeck, Col, Container,
    Form, FormControl,
    Nav,
    Navbar,
    NavDropdown, Row
} from 'react-bootstrap';
import { Link } from 'react-router-dom'

class NavPage extends Component{

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
            <div className="nav-page">
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
                    <Row className="justify-content-md-center sections">
                        <CardDeck className="section-holder">
                            <Card className="text-center section">
                                <Link to="/schemes" className="section-link"/>
                                <Card.Header/>
                                <Card.Img variant="top" src="https://png.pngtree.com/svg/20161215/json_22047.png" />
                                <Card.Body>
                                    <Card.Title>Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="text-center section">
                                <Link to="/schemes" className="section-link"/>
                                <Card.Header/>
                                <Card.Img variant="top" src="https://png.pngtree.com/svg/20161215/json_22047.png" />
                                <Card.Body>
                                    <Card.Title>Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="text-center section">
                                <Link to="/schemes" className="section-link"/>
                                <Card.Header/>
                                <Card.Img variant="top" src="https://png.pngtree.com/svg/20161215/json_22047.png" />
                                <Card.Body>
                                    <Card.Title>Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Row>
                    <Row className="justify-content-md-center subsections">
                        <Card border="primary" className="subsection">
                            <Card.Body>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-right">
                                <Button variant="link">Submit</Button>
                            </Card.Footer>
                        </Card>
                        <Card border="primary" className="subsection">
                            <Card.Body>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-right">
                                <Button variant="link">Submit</Button>
                            </Card.Footer>
                        </Card>
                        <Card border="primary" className="subsection">
                            <Card.Body>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-right">
                                <Button variant="link">Submit</Button>
                            </Card.Footer>
                        </Card>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NavPage;