import React, { Component } from 'react';
import TeamOmegalButton from './common/TeamOmegalButton';
import TeamOmegalModalPopup from './common/TeamOmegalModalPopup';

class ListGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
           tasklist:"",
            showModal: false,
            idx:""
        };
    }
    showModalHandler = (text,idx) => {
        this.setState({
            ...this.state,
            showModal: true,
            tasklist:text,
            idx:idx

        })

    }

    render() {
        return (
            <>
           {this.state.showModal && <TeamOmegalModalPopup
           idx={this.state.idx}
           onCancel={()=>this.setState({
               showModal:false
           })}
            modalEdit={this.props.modalEdit} task={this.state.tasklist} />}

            <ul>
                {this.props.tasklist.length !== 0 && this.props.tasklist.map((task, idx) =>

                    <li key={idx}>{task}
                        <span>
                            <TeamOmegalButton
                                buttonColor='blueviolet'
                                text='EDIT'
                                id={idx}

                                onClick={()=>this.showModalHandler(task,idx)}
                            />
                            <TeamOmegalButton
                                buttonColor='red'
                                text='DELETE'
                                id={idx}
                                onClick={this.props.onDelete} />
                        </span>

                    </li>
                )}

            </ul>
            </>
        );
    }
}

export default ListGroup;