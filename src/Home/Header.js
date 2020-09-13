import React, { Component } from 'react';
import './home.css';
import Join from '../Join/Join';
import Home from './Home';
import Login from '../Login/Login';
import { Switch, Route, Link } from 'react-router-dom';
import Feed from './Feed';
import Team from '../Team/Team';
import Contacts from '../Contacts/Contacts';

class Header extends Component {

    render() {
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
                    class="home"
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
                <Link className="nav-link" to={"/contacts"}>
                <input
                    class="nav"
                    type="submit"
                    id="contact"
                    name="contact"
                    value="Contacts"
                    />
                </Link>
                <Link className="nav-link" to={"/team"}>
                <input
                    class="nav"
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


                <div className="auth-inner">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path="/join" component={Join} />
                        <Route path="/login" component={Login} />
                        <Route path="/team" component={Team} />
                        <Route path="/contacts" component={Contacts} />
                    </Switch>
                </div>

            </div>
        );
    }
}

export default Header;