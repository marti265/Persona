import React, { Component } from 'react';
import { Inject, ScheduleComponent, Day, Week, Month, Year } from '@syncfusion/ej2-react-schedule';


class Date extends Component {

    constructor(props) {
        super();
        var newDate = new Date();
        var date = newDate.getDate();
        var month = newDate.getMonth();
        var year = newDate.getFullYear();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        const dayNames = ["Sunday", "Monday", "Tuesday", 'Wednesday', "Thursday", "Friday", "Saturday"];


        this.state = {
            date: date,
            dayString: dayNames[new Date().getDay()],
            month: monthNames[month],
            year: year
        };
    }

  
    render() {

        return (
            <div className="date">
                <label id="dates">{this.state.dayString} {this.state.month} {this.state.date}</label>
            </div>
        )
    }
}

export default Date