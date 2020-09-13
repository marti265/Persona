import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Join from "./Join/Join";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
              <div>
                  <PrivateRoute exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
                  <Route exact path="/join" component={Join} />
                  <Route exact path="/home" component={Home} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
