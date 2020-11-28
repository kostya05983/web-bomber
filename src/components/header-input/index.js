import React, {Component} from 'react';
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

export default class InputKeyValueComponent extends Component {

    constructor(props) {
        super(props);
        console.log("props of input key value", props);
        this.handleChangeKey = this.handleChangeKey.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    handleChangeKey(e) {
        const key = e.target.value;
        this.props.handleChange(this.props.index, key, this.props.value);
    }

    handleChangeValue(e) {
        const value = e.target.value;
        this.props.handleChange(this.props.index, this.props.dictKey, value);
    }

    render() {
        return (
            <InputGroup>
                <FormControl placeholder="key" onChange={this.handleChangeKey} value={this.props.dictKey}/>
                <FormControl placeholder="value" onChange={this.handleChangeValue} value={this.props.value}/>
            </InputGroup>
        )
    }
}
