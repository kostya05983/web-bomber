import React from 'react'
import PropTypes from "prop-types"

import styles from './component.m.css';

function RunButton(props) {
    return (
        <div className={styles.float} onClick={props.onClick}>
            <i className="mt-4 fa fa-play"/>
        </div>
    )
}

RunButton.propTypes = {
    link: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default RunButton;
