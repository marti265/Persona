import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Home/Header';
import Calendar from 'react-calendar';
import moment from 'moment';
import './calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Inject,ScheduleComponent,Day,Week,Month,Agenda } from '@syncfusion/ej2-react-schedule';


class CalendarR extends Component {
    
    constructor(props) {
        super();
        var newDate = new Date()
        var date = newDate.getDate();
        var month = newDate.getMonth();
        var year = newDate.getFullYear();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];


        this.state = {
            date: date,
            month: monthNames[month],
            year:year
        };
    }


    onDateClick = day => {
        this.setState({
            selectedDate:new Date()
        })
    };


    render() {
        return (
            <div>
                <Header />

                <h2>{this.state.month} {this.state.year}</h2>

                <ScheduleComponent currentView='Month'>
                    <Inject services={[Day, Week, Month, Agenda]} />
                </ScheduleComponent>

            </div>
        );
    }
}


export default CalendarR;