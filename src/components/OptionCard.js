import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Card} from "react-bootstrap";


export default class OptionCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="text-center section">
                <Link to="/schemes" className="section-link"/>
                <Card.Header/>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.text}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}