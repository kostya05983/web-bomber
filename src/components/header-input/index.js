import React from 'react'
import FormControl from "react-bootstrap/es/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

export default class InputKeyValueComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleChangeKey = this.handleChangeKey.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    handleChangeKey(e) {
        const key = e.target.value;
        this.setState({key: key});
        this.handleChange(this.props.index, key, this.props.value);
    }

    handleChangeValue(e) {
        const value = e.target.value;
        this.handleChange(this.props.index, this.props.key, value);
    }

    render() {
        return (
            <InputGroup>
                <FormControl placeholder="key" onChange={this} value={this.props.key}/>
                <FormControl placeholder="value" onChange={this} value={this.props.value}/>
            </InputGroup>
        )
    }
}
