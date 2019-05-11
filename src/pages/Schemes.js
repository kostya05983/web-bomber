import React, { Component } from 'react';
import {
    Container,
} from 'react-bootstrap';

import NavigationBar from "../components/NavigationBar";
import ElementsBar from "../components/ElementsBar/ElementsBar";
import FloatingButton from "../components/FloatingButton/FloatingButton";
import GridWrapper from "../components/Grid/GridWrapper";

// TODO: Somehow set the same image to all scheme items in grid in more efficient way
const schemeImage = "http://icons.iconarchive.com/icons/icons8/ios7/128/Editing-Drafting-Compass-icon.png";
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

    render() {
        return (
            <div className="scheme-page">
                <NavigationBar title='Bomber'/>
                <Container>
                    <ElementsBar/>
                    <FloatingButton link="/schemes"/>
                    <GridWrapper items={items}/>
                </Container>
            </div>
        );
    }
}

export default Schemes;