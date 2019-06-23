import React from 'react'
import PropTypes from 'prop-types';

function AddItem(props) {
    return (
        <div className="list-group">
            <a href="/" className="list-group-item list-group-item-action flex-column align-items-start mb-1">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{props.title}</h5>
                </div>
            </a>
        </div>
    )
}

AddItem.propTypes = {
    title: PropTypes.string.isRequired
};

export default AddItem;