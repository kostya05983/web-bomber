import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

<<<<<<< HEAD
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
=======
import style from './style.css';

const ElementsBar = () => (
    <Row className={style.pane}>
        <Col md="auto" className={"justify-content-md-center" && style.pane}>
            <Link to='/' className={style.option}>Link 1</Link>
        </Col>
        <Col md="auto" className={style.element}>
            <Link to='/' className={style.option}>Link 2</Link>
        </Col>
        <Col md="auto" className={style.element}>
            <Link to='/' className={style.option}>Link 3</Link>
>>>>>>> master
        </Col>
    </Row>
);

export default ElementsBar;