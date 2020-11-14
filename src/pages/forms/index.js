
import React, {Component} from 'react'
import NavigationBar from "../../components/navigation-bar";
import ElementsBar from "../../components/elements-bar";


class TestForms extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="test-forms-page">
                <NavigationBar title={'Bomber'}/>
                <Container>
                    <ElementsBar/>

                </Container>
            </div>
        )
    }
}

function GlobalStateToProps(state) {
    return {

    }
}

function DispatchActionsToProps(dispatc) {
    return {

    }
}

export default connect(GlobalStateToProps, DispatchActionsToProps)(TestForms)
