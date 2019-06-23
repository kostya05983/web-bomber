import React from "react";
import PropTypes from "prop-types";

import styles from './styles.m.css';

function FloatingButton(props) {
    return (
        <div className={styles.float} onClick={props.onClick}>
            <i className="mt-4 fa fa-plus"/>
        </div>
    );
}

FloatingButton.propTypes = {
    link: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FloatingButton;