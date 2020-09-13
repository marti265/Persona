import React, { Component } from 'react'
import Login from '../Login/Login';
import './ForgotPass.css';
import { Switch, Route, Link } from 'react-router-dom';

class ForgotPass extends Component {

    constructor() {
        super()
        this.state = {
            email: ""
        }

        this.handleEmail = this.handleEmail.bind(this)
    }

    handleEmail(event) {
        //let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        this.setState({ email: event.target.value })


    }

    render() {
    return (
        <div>
            <h1>Persona</h1>
            <input class="emailText"
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleEmail}
            />
            <br />
            <br />
            <Link className="nav-link" to={"/login"}>
                <input
                    class="button"
                    type="submit"
                    value="Submit" /></Link>
            <br />
            <Link classname="nav-link" to={"/login"}>
                <input
                    class="button"
                    type="submit"
                    value="Cancel" /></Link>

            <div className="auth-inner">
                <Switch>
                    <Route exact path='/' component={ForgotPass} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </div>
    );
}
}

export default ForgotPass