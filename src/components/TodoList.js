import React, { Component } from 'react';
import CalendarDate from './CalendarDate';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        return(
            <div className="todoList">
                <CalendarDate/>
                <TodoItem/>
            </div>
        )
    }
}

export default TodoList;