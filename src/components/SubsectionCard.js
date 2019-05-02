import React from 'react';
// import { Link } from 'react-router-dom'
import { Button, Card } from "react-bootstrap";


export default function SubsectionCard(props) {
    return (
        <Card border="primary" className="subsection">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-right">
                <Button variant="link">Submit</Button>
            </Card.Footer>
        </Card>
    );
}