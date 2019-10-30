import React, { Component } from 'react';

class Date extends Component {
    render() {
        return(
            <div className="">
                <button className="back"></button>
                <div className="date"></div>
                <div className="month-year">
                    <div className="month"></div>
                    <div className="year"></div>
                </div>
                <div className="day"></div>
                <button className="forward"></button>
            </div>
        )
    }
}

//app starts by displaying the current date 

//when you press the back button it goes to the previous day only if the previous day is greater than the present day (can't look at old todo lists)
//when you press the forward button it goes to the next day 


export default Date;