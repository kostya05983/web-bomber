import React, { Component } from 'react';
import {
    CardDeck, Container,Row
} from 'react-bootstrap';

import * as NavFunctions from '../store/NavigationPart/actions';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import NavigationBar from '../components/NavigationBar'
import ElementsBar from '../components/ElementsBar/ElementsBar'
import OptionCard from '../components/OptionCard/OptionCard'
import SubsectionCard from '../components/SubsectionCard/SubsectionCard'


class Navigation extends Component {

    render() {
        const {sample_text, sample_img} = this.props.navStore;
        console.log(this.props.navStore);
        return (
            <div className="nav-page">
                <NavigationBar title='Bomber'/>
                <Container className="container">
                    <ElementsBar/>
                    <Row className="justify-content-md-center sections">
                        <CardDeck className="section-holder">
                            <OptionCard link="/devices" title='Devices' text="Nearest available devices" img={this.sample_img}/>
                            <OptionCard link="/scripts" title='Scripts' text="Creating and editing test scripts" img={this.sample_img}/>
                            <OptionCard link="/schemes" title='Schemes' text="Schemas for the selected protocol" img={this.sample_img}/>
                        </CardDeck>
                    </Row>
                    <Row className="justify-content-md-center subsections">
                        <SubsectionCard title='Statistics' text="Test statistics. Display graphs, dynamics of device testing processes."/>

                    </Row>
                </Container>
            </div>
        );
    }
}

function GlobalStoreToProps(state){
    return {
        navStore: state.NS_navigationState,
    }
}

function DispatchActionsToProps(dispatch){
    return {
        navFunctions: bindActionCreators(NavFunctions, dispatch)
    }
}

export default connect(GlobalStoreToProps, DispatchActionsToProps)(Navigation);
