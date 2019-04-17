import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

import styles from './styles.m.css';

const ElementsBar = () => (
    <Row className={"justify-content-md-center" && styles.pane}>
        <Col md="auto" className={styles.element}>
            <Link to='/' className={styles.option}>Link 1</Link>
        </Col>
        <Col md="auto" className={styles.element}>
            <Link to='/' className={styles.option}>Link 2</Link>
        </Col>
        <Col md="auto" className={styles.element}>
            <Link to='/' className={styles.option}>Link 3</Link>
        </Col>
    </Row>
);

export default ElementsBar;