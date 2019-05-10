import React, { Component } from 'react';
import {
    Container,
} from 'react-bootstrap';

import NavigationBar from "../components/NavigationBar";
import ElementsBar from "../components/ElementsBar/ElementsBar";
import FloatingButton from "../components/FloatingButton/FloatingButton";
import GridWrapper from "../components/Grid/GridWrapper";

const scriptImage = "https://codepunk.io/content/images/2018/06/codepunk-logo-2018-square-black.png";
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

    render() {
        return (
            <div className="scripts-page">
                <NavigationBar title='Bomber'/>
                <Container>
                    <ElementsBar/>
                    <FloatingButton link="/scripts"/>
                    <GridWrapper items={items}/>
                </Container>
            </div>
        );
    }
}

export default Scripts;