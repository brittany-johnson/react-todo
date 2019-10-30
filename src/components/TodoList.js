import React, { Component } from 'react';
import Date from './Date';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        return(
            <div className="todoList">
                <Date/>
                <TodoItem/>
            </div>
        )
    }
}

export default TodoList;