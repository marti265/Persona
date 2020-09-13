import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { getTeam } from '../services/fakeDataService.js';
import Header from '../Home/Header';
import Home from '../Home/Home';
import { Switch, Route, Link } from 'react-router-dom';
import Join from '../Join/Join';
import Login from '../Login/Login';


export default class Team extends Component {

    state = {
        team: getTeam()
    }
    
    render() {
        if (this.state.team.length === 0) return <p>No member in your team</p>

        return (
            <div>
                <Link className="nav-link" to={"/home"}>
                    <h3 class='logo'>Persona</h3>
                </Link>
                <Link className="nav-link" to={"/login"}>
                    <input
                        class="logout"
                        type="submit"
                        id="logout"
                        name="logout"
                        value="Logout"
                    />
                </Link>
                <br />
                <Link className="nav-link" to={"/home"}>
                    <input
                        class="nav"
                        type="submit"
                        id="home"
                        name="home"
                        value="Home"
                    />
                </Link>
                <input
                    class="nav"
                    type="submit"
                    id="assignment"
                    name="assignment"
                    value="Assignments"
                />
                <input
                    class="nav"
                    type="submit"
                    id="contact"
                    name="contact"
                    value="Contacts"
                />
                <Link className="nav-link" to={"/team"}>
                    <input
                        class="home"
                        type="submit"
                        id="team"
                        name="team"
                        value="Team"
                    />
                </Link>
                <input
                    class="nav"
                    type="submit"
                    id="media"
                    name="media"
                    value="Media"
                />

                <ReactBootStrap.Table >
                    <thead >
                        <tr>
                            <th>Profile</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.team.map((user) => (
                         <tr key={user._id}>
                               <td>Image</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
                </ReactBootStrap.Table>


                <div className="auth-inner">
                    <Switch>
                        <Route exact path='/' component={Team} />
                        <Route path="/join" component={Join} />
                        <Route path="/login" component={Login} />
                        <Route path="/home" component={Home} />
                    </Switch>
                </div>
                </div>
        );
    }
}