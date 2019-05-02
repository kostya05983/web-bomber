import React, { Component } from 'react';
import {
    CardDeck, /*Col,*/ Container,Row
} from 'react-bootstrap';
// import { Link } from 'react-router-dom'

import * as NavFunctions from '../store/NavigationPart/actions';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import NavigationBar from '../components/NavigationBar'
import ElementsBar from '../components/ElementsBar/ElementsBar'
import OptionCard from '../components/OptionCard'
import SubsectionCard from '../components/SubsectionCard'

class Navigation extends Component{

    // constructor(props) {
    //     super(props);
    //     this.sampleText = '';
    //     this.sampleImg = '';

    //     this.toggle = this.toggle.bind(this);

    //     this.state = {
    //         isLoading: true,
    //         isOpen: false,
    //     };
    // }

    // toggle() {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    // }
    // For toggle element for open: use the props container which have NavFunction method have contain toogle method


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