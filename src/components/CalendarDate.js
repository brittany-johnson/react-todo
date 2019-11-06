import React, { Component } from 'react';

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

    addToSelf (a, b) {
        return a += b;
    }

    subtractFromSelf (a, b) {
        return a -= b;
    }

    // checkDate(date, operation) {
    //     let forward;
    //     let backward;

    //     operation === this.addToSelf ? forward = true : forward = false;
    //     operation === this.subtractFromSelf ? backward = true : backward = false;

    //     //if date is 1st
    //     if (date === 1 && forward) {
    //         this.setState((state) => ({
    //             date: operation(state.date, 1)
    //         }))
    //     } else if (date === 1 && backward) {
    //         if (this.state.month === 0 || 2 || 4 || 6 || 7 || 9 || 11) {
    //             //Jan, March, May, July, August, Oct, Dec
    //             this.setState((state) => ({
    //                 date: 31
    //             }))
    //         } else if (this.state.month === 3 || 5 || 8 || 10) {
    //             //April, June, Sep, Nov
    //             this.setState((state) => ({
    //                 date: 30
    //             }))
    //         } else if(this.state.month === 1) {
    //             //Feb
    //             this.setState((state) => ({
    //                 date: 28
    //             }))
    //         }
    //     }

    //     //if date is 2nd through 27th
    //     if (date >= 2 && date < 28) {
    //         this.setState((state) => ({
    //             date: operation(state.date, 1)
    //         }))
    //     }
        
    //     //febuary
    //     if (date === 28 && this.state.month === 1 && forward) {
    //         this.setState((state) => ({
    //             date: 1
    //         }))
    //     } else if (date === 28 && this.state.month === 1 && backward) {
    //         this.setState((state) => ({
    //             date: operation(state.date, 1)
    //         }))
    //     }
    // }

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
                break;
            //April, June, Sep, Nov
            case 3:
            case 5: 
            case 8: 
            case 10:
                return 30;
                // this.checkDate(30);
                break;
            //Feb
            case 1:
                return 28;
                // this.checkDate(28);
                break;
        }
    }

    checkDate() {
        let currentDate = this.state.date;
        let currentMonth = this.state.month;
        let daysInMonth = this.checkMonth(this.state.month);
        
        if (this.state.direction === "forward" && currentDate === 1) {
            this.setState({
                date: this.addToSelf(currentDate, 1)
            })
        } 

        // if (daysInMonth === 31 && this.state.direction === "forward") {
        //     if (currentDate === daysInMonth) {
        //         this.setState({
        //             date: 1
        //         })
        //     }
        //     this.setState({
        //         date: this.addToSelf(currentDate, 1)
        //     })
        // } else if (daysInMonth === 31 && this.state.direction === "backwards") {

        // }
        
        if (this.state.direction === "forward") {
            if (currentDate === daysInMonth && currentMonth === 11) {
                this.setState({
                    date: 1,
                    month: 0
                })
            } else if (currentDate === daysInMonth) {
                this.setState({
                    date: 1,
                    month: this.addToSelf(currentMonth, 1)
                })
            } else {
                this.setState(() => ({
                    date: this.addToSelf(currentDate, 1)
                }))
            }
        } 
        if (this.state.direction === "backwards") {
            if (currentDate === 1) {
                this.setState(() => ({
                    month: this.subtractFromSelf(currentMonth, 1)
                }), () => this.setState({date:  this.checkMonth(this.state.month)})) //set date to the daysInMonth of the updated month state
            } else {
                this.setState(() => ({
                    date: this.subtractFromSelf(currentDate, 1)
                }))
            }
        }

        // if (daysInMonth === 28) {
           
        // }
    }

    navigateForwards() {
        this.setState({
            direction: "forward"
        }, () => this.checkDate())
    }

    navigateBackwards() {
        this.setState({
            direction: "backwards"
        }, () => this.checkDate())
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