import React, { Component } from 'react';
import todoItems from '../data';
import EditTodoItem from './EditTodoItem';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inEditMode: false,
            clickedItem: "", 
            items: todoItems,
        }
        this.editTodo = this.editTodo.bind(this);
        this.createTodo = this.createTodo.bind(this);
    }

    createTodo() {
        console.log(todoItems)
        todoItems[this.props.date].push("Click here to edit"); 
        return this.updateData(todoItems);
    }

    updateData(data) {
        this.setState({
            items: data
        })
    }

    editTodo(index) {
        this.setState(state => ({ 
            inEditMode: !state.inEditMode, 
            clickedItem: index
        }));
    }

    render() {
        return(
            <div>
                <ul className="todoItems">
                    {this.state.items[this.props.date] &&
                        this.state.items[this.props.date].map((item, index) => {
                        if(this.state.inEditMode && this.state.clickedItem === index) {
                            return <EditTodoItem id={index} todo={item} date={this.props.date} key={index} editTodo={this.editTodo.bind(this)}/>
                        }
                        else {
                            console.log(index);
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