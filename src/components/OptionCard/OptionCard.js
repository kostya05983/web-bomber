import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Card} from "react-bootstrap";

import styles from "./styles.m.css"

export default class OptionCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className={"text-center" && styles.section}>
                <Link to="/schemes" className={styles.section_link}/>
                <Card.Header className={styles.card_header}/>
                <Card.Img className={styles.card_img_top} variant="top" src={this.props.img} />
                <Card.Body className={styles.card_body}>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.text}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}