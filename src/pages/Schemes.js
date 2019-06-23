import React, { Component } from 'react';
import {
    Container,
} from 'react-bootstrap';

import NavigationBar from "../components/NavigationBar";
import ElementsBar from "../components/ElementsBar/ElementsBar";
import FloatingButton from "../components/FloatingButton/FloatingButton";
import GridWrapper from "../components/Grid/GridWrapper";
import SchemeCreateModal from "../components/SchemeCreateModal/SchemeCreateModal";

// TODO: Somehow set the same image to all scheme items in grid in more efficient way
const schemeImage = "https://codepunk.io/content/images/2018/06/codepunk-logo-2018-square-black.png";
const items = [
    { id: 1, link: "/schemes",name: "Scheme",img: schemeImage},
    { id: 2, link: "/schemes",name: "Scheme",img: schemeImage},
    { id: 3, link: "/schemes",name: "Scheme",img: schemeImage},
    { id: 4, link: "/schemes",name: "Scheme",img: schemeImage},
    { id: 5, link: "/schemes",name: "Scheme",img: schemeImage},
    { id: 6, link: "/schemes",name: "Scheme",img: schemeImage},
    { id: 7, link: "/schemes",name: "Scheme",img: schemeImage},
    { id: 8, link: "/schemes",name: "Scheme",img: schemeImage}
];

class Schemes extends Component{
    constructor(...args) {
        super(...args);
        this.state = { modalShow: false };
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <div className="scheme-page">
                <NavigationBar title='Bomber'/>
                <SchemeCreateModal
                    show={this.state.modalShow}
                    onHide={modalClose}
                />
                <Container>
                    <ElementsBar/>
                    <FloatingButton link="/schemes" onClick={() => this.setState({ modalShow: true })}/>
                    <GridWrapper items={items}/>
                </Container>
            </div>
        );
    }
}

export default Schemes;