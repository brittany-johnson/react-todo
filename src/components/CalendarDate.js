import React, { Component } from 'react';

let d = new Date();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

class CalendarDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: 1,
            year:  d.getFullYear(),
            day:   d.getDay(),
            date:  d.getDate(),
        };
        this.navigateForwards = this.navigateForwards.bind(this);
        this.navigateBackwards = this.navigateBackwards.bind(this);
    }

    addToSelf (a, b) {
        return a += b;
    }

    subtractFromSelf (a, b) {
        return a -= b;
    }

    checkDate(date, operation) {
        let forward;
        let backward;

        operation === this.addToSelf ? forward = true : forward = false;
        operation === this.subtractFromSelf ? backward = true : backward = false;

        //if date is 1st
        if (date === 1 && forward) {
            this.setState((state) => ({
                date: operation(state.date, 1)
            }))
        } else if (date === 1 && backward) {
            if (this.state.month === 0 || 2 || 4 || 6 || 7 || 9 || 11) {
                this.setState((state) => ({
                    date: 31
                }))
            } else if (this.state.month === 3 || 5 || 8 || 10) {
                this.setState((state) => ({
                    date: 30
                }))
            } else if(this.state.month === 1) {
                this.setState((state) => ({
                    date: 28
                }))
            }
        }

        //if date is 2nd through 27th
        if (date >= 2 && date < 27) {
            this.setState((state) => ({
                date: operation(state.date, 1)
            }))
        }

        if (date === 28 && this.state.month === 1) {
            
        }
    }

    navigateForwards() {
        this.checkDate(this.state.date, this.addToSelf)
    }

    navigateBackwards() {
        this.checkDate(this.state.date, this.subtractFromSelf)
    }

    render() {
        return(
            <div className="cal-date">
                <button className="back" onClick={this.navigateBackwards}></button>
                <div className="date">{this.state.date}</div>
                <div className="month-year">
                    <div className="month">{months[this.state.month]}</div>
                    <div className="year">{this.state.year}</div>
                </div>
                <div className="day">{days[this.state.day]}</div>
                <button className="forward" onClick={this.navigateForwards}></button>
            </div>
        )
    }
}

//app starts by displaying the current date 

//pressing next button updates the date and updates the todo list

//when you press the back button it goes to the previous day only if the previous day is greater than the present day (can't look at old todo lists)
//when you press the forward button it goes to the next day 


export default CalendarDate;