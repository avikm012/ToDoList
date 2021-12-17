import React, { Component, Fragment } from 'react'
import ListGroup from './ListGroup'
import TeamOmegalButton from './common/TeamOmegalButton'
import TeamOmegalHeader from './common/TeamOmegalHeader'
import TeamOmegalInputBox from './common/TeamOmegalInputBox'
import TeamOmegalModalPopup from './common/TeamOmegalModalPopup'
import '../Todo.css'
class ToDolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasklist: [],
            taskName: '',
            showModal: false,
            resetInput: { isReset: false }

        };
    }
    // addTask = () => {

    //     this.setState(previousState => ({
    //         tasklist: [...previousState.tasklist, this.state.taskName],
    //         taskName: ''

    //     }
    //     )
    //     );
    //     console.log("tajklfdsaglafsk", this.state.taskName);
    //     this.setState({ taskName: "" })


    // }
    addTask = () => {

        this.setState(previousState => ({
            tasklist: [...previousState.tasklist, this.state.taskName],
            resetInput: { isReset: true }
        }));


    }

    editTask = (task, id) => {
        let newList = [...this.state.tasklist]
        newList = newList.map((element, idx) => {
            if (idx === id) {
                return task;
            }
            return element;
        })
        this.setState({
            tasklist: newList
        });



    }
    handleCallback = (childData) => {
        this.setState({ taskName: childData })
    }

    deleteTask = (id) => {
        let newList = [...this.state.tasklist]
        newList = newList.filter((element, idx) => idx !== id)
        this.setState({
            tasklist: newList
        });
    }
    showModalHandler = (id) => {
        this.setState({
            ...this.state,
            showModal: true
        })

    }
    render() {
        return (
            <div className='todo'>
                <TeamOmegalHeader />
                <br />
                {this.state.showModal && <TeamOmegalModalPopup />}
                <div className='todo__main'>
                    <div className="main__input">
                         <TeamOmegalInputBox
                            placeholder='Enter you task'
                            value={this.state.taskName}
                            inputReset={this.state.resetInput}
                            parentCallback={this.handleCallback} /> 
                        {/* <input
                            type='text'
                            value={this.state.taskName}
                            placeholder={this.props.placeholder}
                            onChange={(e)=>this.handleCallback(e)}
                        /> */}
                        <TeamOmegalButton
                            buttonColor='Yellow'
                            text='ADD'
                            onClick={this.addTask}
                        />
                    </div>

                </div>
                <br />
                <div className="todo__tasklist">
                    <ListGroup
                        tasklist={this.state.tasklist}
                        onDelete={this.deleteTask.bind(this)}
                        onEdit={this.showModalHandler}
                        modalEdit={this.editTask}
                    />
                </div>
            </div>
        )
    }


}

export default ToDolist