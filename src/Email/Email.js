import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Home/Header';
import Calendar from 'react-calendar';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './email.css';
import { Inject, ScheduleComponent, Day, Week, Month, Agenda } from '@syncfusion/ej2-react-schedule';


class Email extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }


    render() {
        return (
            <div>

                <Header/>

                <form id="contact-form">
                    <div className="fform-group">
                        <label
                            htmlFor="from">From: </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="eform-group">
                        <label
                            htmlFor="exampleInputEmail1">Email Address To: </label>
                        <input
                            type="email"
                            className="form-control"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="form-group">
                        <label
                            htmlFor="message">Message</label>
                        <textarea
                            className="form-control"
                            rows="5"></textarea>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary">Submit</button>

                </form>

                <div className="auth-inner">
                    <Switch>
                        <Route exact path='/' component={Calendar} />
                        <Route path="/home" component={Home} />

                    </Switch>
                </div>

            </div>
        );
    }
}


export default Email;