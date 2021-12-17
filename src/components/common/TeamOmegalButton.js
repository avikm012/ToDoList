import React, { Component } from 'react';

class TeamOmegalButton extends Component {
    render() {
        return (
            <button
                onClick={() => this.props.onClick(this.props.id)}
                style={{ backgroundColor: this.props.buttonColor }}
            >
                {this.props.text}
            </button>
        );
    }
}

export default TeamOmegalButton;