import React from "react";
import PropTypes from "prop-types";
import {CardDeck} from "react-bootstrap";
import GridItem from ".";

import styles from './wrapper.css';

function GridWrapper(props) {
    console.log("GridWrapper props", props.items);
    return (
        <CardDeck className={styles.wrapper}>
            {props.items.map(i => <GridItem key={i.id} link={i.link} name={i.name} img={props.img}/>)}
        </CardDeck>
    );
}

GridWrapper.propTypes = {
    items: PropTypes.array.isRequired
};

export default GridWrapper;