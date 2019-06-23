import React from "react";
import PropTypes from "prop-types";

import styles from './styles.m.css';

function FloatingButton(props) {
    return (
        <a href={props.link} className={styles.float} onClick={props.onClick}>
            <i className="mt-4 fa fa-plus"/>
        </a>
    );
}

FloatingButton.propTypes = {
    link: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FloatingButton;