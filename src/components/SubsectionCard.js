import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Button, Card} from "react-bootstrap";


export default class SubsectionCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card border="primary" className="subsection">
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.text}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-right">
                    <Button variant="link">Submit</Button>
                </Card.Footer>
            </Card>
        );
    }
}