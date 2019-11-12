import React, { Component } from 'react';
import CalendarDate from './CalendarDate';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: ""
        }
    }
    getCurrentDate(date) {
        this.setState({
            currentDate: date
        })
    }
    render() {
        return(
            <div className="todoList">
                <CalendarDate getCurrentDate={this.getCurrentDate.bind(this)}/>
                <TodoItem date={this.state.currentDate || "61092019"}/>
            </div>
        )
    }
}

export default TodoList;