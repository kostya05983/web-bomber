import React, { Component } from 'react';
import {
    Container,
} from 'react-bootstrap';

import NavigationBar from "../components/NavigationBar";
import ElementsBar from "../components/ElementsBar/ElementsBar";
import FloatingButton from "../components/FloatingButton/FloatingButton";
import GridWrapper from "../components/Grid/GridWrapper";
import ScriptCreateModal from "../components/ScriptCreateModal/ScriptCreateModal";

const scriptImage = "http://icons.iconarchive.com/icons/icons8/ios7/128/Editing-Drafting-Compass-icon.png";
const items = [
    { id: 1, link: "/scripts", name: "Script",img: scriptImage},
    { id: 2, link: "/scripts",name: "Script",img: scriptImage},
    { id: 3, link: "/scripts",name: "Script",img: scriptImage},
    { id: 4, link: "/scripts",name: "Script",img: scriptImage},
    { id: 5, link: "/scripts",name: "Script",img: scriptImage},
    { id: 6, link: "/scripts",name: "Script",img: scriptImage},
    { id: 7, link: "/scripts",name: "Script",img: scriptImage},
    { id: 8, link: "/scripts",name: "Script",img: scriptImage}
];

class Scripts extends Component{
    constructor(...args) {
        super(...args);
        this.state = { modalShow: false };
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <div className="scripts-page">
                <NavigationBar title='Bomber'/>
                <ScriptCreateModal
                    show={this.state.modalShow}
                    onHide={modalClose}
                />
                <Container>
                    <ElementsBar/>
                    <FloatingButton link="/scripts" onClick={() => this.setState({ modalShow: true })}/>
                    <GridWrapper items={items}/>
                </Container>
            </div>
        );
    }
}

export default Scripts;