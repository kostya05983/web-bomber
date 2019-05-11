import React from "react";
import PropTypes from "prop-types";

import styles from './styles.m.css';

function FloatingButton(props) {
    return (
        <a href={props.link} className={styles.float}>
            <i className="mt-4 fa fa-plus"/>
        </a>
    );
}

FloatingButton.propTypes = {
    link: PropTypes.string.isRequired
};

export default FloatingButton;