import React, { Component } from 'react';
import './join.css';
import ForgotPass from '../ForgotPass/ForgotPass';
import Home from '../Home/Home';
import {Switch, Route, Link } from 'react-router-dom';


class Join extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            password: "",
            rePassword:""
        }

        this.handleChange = this.handleChange.bind(this)
        //this.handleEmail = this.handleEmail.bind(this)

    }

    /**
     * Handle Change
     * Username, Password and re-enter Password
     * @param {any} event
     */
    handleChange(event) {
        const { name, value, type, password, rePassword, email } = event.target
            this.setState({
                [name]: event.target.username,
                [value]: event.target.value,
                [type]: event.target.type,
                [password]: event.target.password,
                [rePassword]: event.target.rePassword,
                [email]: event.target.email
            })
    }

    //handleEmail(email) {
    //    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //    const {email} = event.target

    //    this.setState({
    //        [email]: event.target.email
    //    })
    

    //}

    render() {
        return (
            <div>
                <h1>Persona</h1>
                <form onSubmit={this.handleSubmit}>
                <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarToggler">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <input
                                                type="text"
                                                value={this.state.username}
                                                name="username"
                                                placeholder="Username"
                                                onChange={this.handleChange} />
                                        </li>
                                        <li className="nav-item">
                                            <input
                                                type="email" 
                                                name="email"
                                                placeholder="Email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                        <li className="nav-item">
                                            <input
                                                type="text"
                                                id="password"
                                                name="password"
                                                placeholder="Password"
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                        <li className="nav-item">
                                            <input
                                                type="text"
                                                id="rePassword"
                                                name="rePassword"
                                                placeholder="Re-enter Password"
                                                value={this.state.rePassword}
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                        <br/>
                                            <li className="nav-item">
                                            <Link className="nav-link" to={"/home"}>
                                                <button type="submit" className="nav-link">Join</button>
                                            </Link>
                                        </li>
                                        <br/>
                                 <li className="nav-item">
                                      Already have an account: 
                                    <Link className="nav-link" to={"/forgot"}> Forgot Password?</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                        </nav>
                        </div>

                    <div className="auth-inner">
                        <Switch>
                            <Route exact path='/' component={Join} />
                            <Route path="/home" component={Home} />
                            <Route path="/forgot" component={ForgotPass} />
                        </Switch>
                    </div>

            </form>
            </div>
    );
    }
}
export default Join;