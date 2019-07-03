import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { Switch, Route } from "react-router";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";

class App extends React.Component {

	render() {
		return (
      <Router>
        <div>
          <Route exact component={Home} path="/" />
          <Route component={Login} path="/login" />
          <Route component={Dashboard} path="/dashboard/:userName" />
          <Route exact component={SinglePost} path="/post/:id" />
        </div>
      </Router>
    );
	}
}

export default App;
