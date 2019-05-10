import React from "react";
import PropTypes from "prop-types";
import {CardDeck} from "react-bootstrap";
import GridItem from "./GridItem";

import styles from './wrapper.css';

function GridWrapper(props) {
    return (
        <CardDeck className={styles.wrapper}>
            {props.items.map(i => <GridItem key={i.id} link={i.link} name={i.name} img={i.img}/>)}
        </CardDeck>
    );
}

GridWrapper.propTypes = {
    items: PropTypes.array.isRequired
};

export default GridWrapper;