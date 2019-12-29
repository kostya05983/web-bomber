import React from "react";
import PropTypes from "prop-types";

function Item(props) {
    return (
        <div className="list-group">
            <a href="/" className="list-group-item list-group-item-action flex-column align-items-start mb-1">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{props.title}</h5>
                    <small>{"last activity: " + props.time}</small>
                </div>
                <p className="mb-1">{props.subtitle}</p>
            </a>
        </div>
    );
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};

export default Item;