import React, { Component } from 'react';
import todoItems from '../data';
import EditTodoItem from './EditTodoItem';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inEditMode: false,
            clickedItem: ""
        }
        this.editTodo = this.editTodo.bind(this);
    }

    createTodo() {
        console.log("hello")
    }
    editTodo(index) {
        this.setState(state => ({ 
            inEditMode: !state.inEditMode, 
            clickedItem: index 
        }));
    }

    render() {
        const items = todoItems;
        // const Item = () => {
        //     if(this.props.date) {
        //         return items[this.props.date].map((item, index) => <li key={index} onClick={this.editTodo(index)} >{item}</li>)
        //     }
        // };
        return(
            <div>
                <ul className="todoItems">
                    {items[this.props.date].map((item, index) => {
                        if(this.state.inEditMode && this.state.clickedItem === index) {
                            return <div key={index}>Edit Mode</div>
                        }
                        else {
                            return <li key={index} onClick={() => this.editTodo(index)} >{item}</li>
                        }
                    })}
                </ul>
                <button onClick={this.createTodo}>+</button>
            </div>
        )
    }
}

export default TodoItem;