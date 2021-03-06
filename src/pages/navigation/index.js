import React, {Component} from 'react';
import {
    CardDeck, Container, Row
} from 'react-bootstrap';

import * as NavFunctions from '../../store/navigation-part/actions';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import NavigationBar from '../../components/navigation-bar'
import ElementsBar from '../../components/elements-bar'
import OptionCard from '../../components/option-card'
import SubsectionCard from '../../components/subsection-card'


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
                            <OptionCard link="/scripts" title='Scripts' text="Creating and editing test scripts"
                                        img={this.sample_img}/>
                            <OptionCard link="/schemes" title='Schemes' text="Schemas for the selected protocol"
                                        img={this.sample_img}/>
                            <OptionCard link="/forms" title='Forms' text="Form to run pipelines" img={this.sample_img}/>
                        </CardDeck>
                    </Row>
                    <Row className="justify-content-md-center subsections">
                        <SubsectionCard title='Statistics'
                                        text="Test statistics. Display graphs, dynamics of device testing processes."/>

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
