import React from 'react';
import PropTypes from 'prop-types'

import styles from './styles.m.css'

function FloatingButtonHandler(props) {
    return (
        <div className={styles.float} onClick={props.handler}>
            <i className="mt-4 fa fa-plus"/>
        </div>
    )
}

FloatingButtonHandler.proptTypes = {
    handler: PropTypes.func.isRequired
};

export default FloatingButtonHandler