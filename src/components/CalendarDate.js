import React, { Component } from 'react';
import todoItems from '../data';
let d = new Date();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

class CalendarDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: d.getMonth(),
            year:  d.getFullYear(),
            day:   d.getDay(),
            date:  d.getDate(),
            direction: "",
        };
        this.navigateForwards = this.navigateForwards.bind(this);
        this.navigateBackwards = this.navigateBackwards.bind(this);
    }

    componentDidMount(){
        this.addDateEntry();
      }


    addToSelf(a, b) {
        return a += b;
    }

    subtractFromSelf(a, b) {
        return a -= b;
    }

    checkMonth(month) {
        switch (month) {
            //Jan, March, May, July, August, Oct, Dec
            case 0:
            case 2:
            case 4:
            case 6: 
            case 7: 
            case 9: 
            case 11:
                return 31;
                // this.checkDate(31);
            //April, June, Sep, Nov
            case 3:
            case 5: 
            case 8: 
            case 10:
                return 30;
                // this.checkDate(30);
            //Feb
            case 1:
                return 28;
                // this.checkDate(28);
        }
    }

    updateCalendarDate() {
        let currentDate = this.state.date;
        let currentMonth = this.state.month;
        let currentDay = this.state.day;
        let currentYear = this.state.year;
        let daysInMonth = this.checkMonth(this.state.month);
        
        if (this.state.direction === "forward") {
            if (currentDate === daysInMonth && currentMonth === 11) {
                this.setState({
                    date: 1,
                    month: 0
                }, () => this.addDateEntry())
            } else if (currentDate === daysInMonth) {
                this.setState({
                    date: 1,
                    month: this.addToSelf(currentMonth, 1)
                }, () => this.addDateEntry())
            } else {
                this.setState(() => ({
                    date: this.addToSelf(currentDate, 1),
                }), () => this.addDateEntry())
            }

            if (currentDay === 6) {
                this.setState(() => ({
                    day: 0,
                }), () => this.addDateEntry())
            } else {
                this.setState(() => ({
                    day: this.addToSelf(currentDay, 1),
                }), () => this.addDateEntry())
            }

            if (currentMonth === 11 && currentDate === 31) {
                this.setState(() => ({
                    year: this.addToSelf(currentYear, 1)
                }), () => this.addDateEntry())
            }
        } 
        if (this.state.direction === "backwards") {
            if (currentDate === 1) {
                this.setState(() => ({
                    month: this.subtractFromSelf(currentMonth, 1)
                }), () => this.setState({date:  this.checkMonth(this.state.month)}), () => this.addDateEntry()) //set date to the daysInMonth of the updated month state
            } else {
                this.setState(() => ({
                    date: this.subtractFromSelf(currentDate, 1)
                }), () => this.addDateEntry())
            }

            if (currentDay === 0) {
                this.setState(() => ({
                    day: 6,
                }), () => this.addDateEntry())
            } else {
                this.setState(() => ({
                    day: this.subtractFromSelf(currentDay, 1),
                }), () => this.addDateEntry())
            }

            if (currentMonth === 0 && currentDate === 1) {
                this.setState(() => ({
                    year: this.subtractFromSelf(currentYear, 1)
                }), () => this.addDateEntry())
            }

            if (currentDate === 1 && currentMonth === 0) {
                this.setState(() => ({
                    date: 31,
                    month: 11
                }), () => this.addDateEntry())
            }
        }
    }

    addDateEntry() {
        let currentDate = `${this.state.day}${this.state.month}${this.state.date}${this.state.year}`;

        this.props.getCurrentDate(currentDate);
        // todoItems[currentDate] = ["thing1", "thing2", "thing3"];
    }

    navigateForwards() {
        this.setState({
            direction: "forward"
        }, 
        () => this.updateCalendarDate());
        console.log(todoItems);
    }

    navigateBackwards() {
        this.setState({
            direction: "backwards"
        }, () => this.updateCalendarDate())
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

export default CalendarDate;
