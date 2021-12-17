import React, { Component } from 'react';

class TeamOmegalInputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: this.props.value,
        };
    }
 
    onTrigger = (event) => {
        this.setState({ inputVal: event.target.value })
        this.props.parentCallback(event.target.value);
        this.props.inputReset.isReset = false

    }

    render() {
        return (

            <input
                type='text'
                value={this.props.inputReset.isReset ? '' : this.state.inputVal}

                placeholder={this.props.placeholder}
                onChange={this.onTrigger}
            />
        );
    }
}

export default TeamOmegalInputBox;