import React, {Component} from 'react';
import {
    CardDeck, Container, Row
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
        console.log(this.props.navStore)
        return (
            <div className="nav-page">
                <NavigationBar title='Bomber'/>
                <Container className="navpage-container">
                    <ElementsBar/>
                    <Row className="justify-content-md-center sections">
                        <CardDeck className="section-holder">
                            <OptionCard title='Title' text={this.sampleText} img={this.sampleImg}/>
                            <OptionCard title='Title' text={this.sampleText} img={this.sampleImg}/>
                            <OptionCard title='Title' text={this.sampleText} img={this.sampleImg}/>
                        </CardDeck>
                    </Row>
                    <Row className="justify-content-md-center subsections">
                        <SubsectionCard title='Title' text={this.sampleText}/>
                        <SubsectionCard title='Title' text={this.sampleText}/>
                        <SubsectionCard title='Title' text={this.sampleText}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

function GlobalStoreToProps(state) {
    return {
        navStore: state.NS_navigationState,
    }
}

function DispatchActionsToProps(dispatch) {
    return {
        navFunctions: bindActionCreators(NavFunctions, dispatch)
    }
}

export default connect(GlobalStoreToProps, DispatchActionsToProps)(Navigation);