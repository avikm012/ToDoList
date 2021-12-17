import React, { Component } from 'react';
import TeamOmegalButton from './TeamOmegalButton';

class TeamOmegalModalPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
           tasklist:this.props.task,
            showModal: false,
        };
    }
    inputHandler=(e)=>{
        this.setState({
            tasklist: e.target.value,
        })
    }
    saveChange=()=>{
        this.props.modalEdit(
            this.state.tasklist,
            this.props.idx
        )
        this.props.onCancel();
        console.log("hjfskdal");
    }

 
    render() {
        return (
            <div className='modal'>
                <input
                    type='text'
                    value={this.state.tasklist}
                    placeholder={this.props.placeholder}
                    onChange={(e)=>this.inputHandler(e)}
                />
                <br />
                <TeamOmegalButton
                    text='Change'
                    buttonColor='blueviolet'
                    onClick={this.saveChange}
                />
            </div>
        );
    }
}

export default TeamOmegalModalPopup;