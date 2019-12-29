import React from 'react';
import { Link } from 'react-router-dom'
import {Card} from "react-bootstrap";
import PropTypes from "prop-types";

import styles from "./component.m.css"

function OptionCard(props) {
    return (
        <Card className={"text-center" && styles.section}>
            <Link to={props.link} className={styles.section_link}/>
            <Card.Header className={styles.card_header}/>
            <Card.Img className={styles.card_img_top} variant="top" src={props.img}/>
            <Card.Body className={styles.card_body}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

OptionCard.propTypes = {
    link: PropTypes.string.isRequired
};

export default OptionCard;