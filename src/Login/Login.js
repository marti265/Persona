import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../base.js";
import Join from '../Join/Join';
import Home from '../Home/Home';
import Email from '../Email/Email';
import { AuthContext } from "../Auth.js";
import { Switch, Route, Link } from 'react-router-dom';


const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
              <button type="submit">Log in</button>

              <Link className="nav-link" to={"/join"}>
                  <button type="submit">Join</button>
              </Link>

              <Link className="nav-link" to={"/home"}>
                  <button type="submit">Home</button>
              </Link>

              <Link className="nav-link" to={"/email"}>
                  <button type="submit">Email</button>
              </Link>

              <div className="auth-inner">
                  <Switch>
                      <Route exact path='/' component={Login} />
                      <Route path="/join" component={Join} />
                      <Route path="/home" component={Home} />
                      <Route path="/email" component={Email}/>
                  </Switch>
              </div>
      </form>
    </div>
  );
};

export default withRouter(Login);
