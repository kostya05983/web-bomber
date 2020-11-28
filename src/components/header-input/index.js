import React from 'react'
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

export default class InputKeyValueComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            key: undefined,
            value: undefined
        };
        this.handleChangeKey = this.handleChangeKey.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    handleChangeKey(e) {
        const key = e.target.value;
        this.setState({key: key});
        this.props.handleChange(this.props.index, key, this.state.value);
    }

    handleChangeValue(e) {
        const value = e.target.value;
        this.setState({value: value});
        this.props.handleChange(this.props.index, this.state.key, value);
    }

    render() {
        return (
            <InputGroup>
                <FormControl placeholder="key" onChange={this.handleChangeKey} value={this.props.key}/>
                <FormControl placeholder="value" onChange={this.handleChangeValue} value={this.props.value}/>
            </InputGroup>
        )
    }
}
