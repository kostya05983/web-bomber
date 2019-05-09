import React, { Component } from 'react';
import {
    Container,
} from 'react-bootstrap';

import NavigationBar from "../components/NavigationBar";
import ElementsBar from "../components/ElementsBar/ElementsBar";

class Schemes extends Component{

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isLoading: true,
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="scheme-page">
                <NavigationBar title='Bomber'/>
                <Container className="navpage-container">
                    <ElementsBar/>
                </Container>
                <h5>Scheme page</h5>
            </div>
        );
    }
}

export default Schemes;