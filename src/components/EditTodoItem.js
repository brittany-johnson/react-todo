import React, { Component } from 'react';
import todoItems from '../data';

class EditTodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.todo
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSave(event) {
        todoItems[this.props.date][this.props.id] = this.state.value;
        this.props.editTodo(this.props.id);
    }
    handleCancel(event) {
        this.props.editTodo(this.props.id);
    }
    render() {
        return (
            <div key={this.props.id}>
                {this.props.todo ? 
                    <div>
                        <input type="text" value={this.state.value} onChange={this.handleChange}></input> 
                        <button onClick={this.handleSave}>Save</button>
                        <button onClick={this.handleCancel}>Cancel</button>
                    </div>
                    : null
                }
            </div>
        )
    }
}

export default EditTodoItem;