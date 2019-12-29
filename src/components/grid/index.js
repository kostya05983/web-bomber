import React from "react";
import {Link} from "react-router-dom";

import PropTypes from "prop-types";
import styles from './item.css'

function GridItem(props) {
    return (
        <div className="card mb-3 pl-3">
            <Link to={props.link} className={styles.link}/>
            <div className="row no-gutters">
                <div className="col-md-4 pt-3 pb-3">
                    <img src={props.img}
                         className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <small className="card-text">Type: ... </small><br/>
                        <small className="card-text">Prop 1: ... </small><br/>
                        <small className="card-text">Prop 2: ... </small><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

GridItem.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
};

export default GridItem;