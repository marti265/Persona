import React, { Component } from 'react';
import './home.css';
import Header from './Header';
import Calendar from '../Calendar/Calendar';
import Email from '../Email/Email';
import { Switch, Route, Link } from 'react-router-dom';
import Feed from './Feed';
import { Inject, ScheduleComponent, Day, Week, Month, Year} from '@syncfusion/ej2-react-schedule';



class Home extends Component {
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
            <div>
                <Header/>

                <br />
                <br />
                <Link className="nav-link" to={"/calendar"}>
                    <input
                        class="options"
                        type="submit"
                        id="unabailable"
                        name="unavailable"
                        value="Unavailable"
                    />
                </Link>
                <Link className="nav-link" to={"/email"}>
                    <input
                    class="options"
                    type="submit"
                    id="media"
                    name="media"
                    value="Email Lead"
                    />
                </Link>

                <br/>
                <hr />
                <label class="wait">Waiting: 2</label>
                <input
                    type="submit"
                    id="accept"
                    name="accept"
                    value="Accept"
                />
                <hr />
                <label id="dates">{this.state.dayString} {this.state.month} {this.state.date}</label>
                <br />

                <Feed />


                <hr />
                <h3>Assigned Tasks: </h3>
                <hr />
                <br/>
                <label class="d">Sunday May 9 </label>
                <br/>
                <label>Assigned Tasks: </label>
                <br/>
                <label>Electric Guitar </label>                
                <hr />
                <label>Saturday May 10 </label>
                <br />
                <label>Assigned Tasks: </label>
                <br />
                <label>Electric Guitar </label>    


                    <div className="auth-inner">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path="/calendar" component={Calendar} />
                        <Route path="/email" component={Email} />
                        </Switch>
                    </div>

            </div>
            );
    }
}

export default Home;