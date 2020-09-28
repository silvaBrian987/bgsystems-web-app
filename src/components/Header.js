import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from '../logo.svg';

import Main from '../components/Main';
import NoMatch from './NoMatch';
import About from './About';

function Header() {
    return (
        <Router>
            <div className="jumbotron text-center mb-0">
                <h1>BGSystems's homepage</h1>
                <p>Welcome! Welcome to my page.</p>
            </div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <Link className="nav-link" to="/"><img src={logo} alt="Logo" style={{ width: 40 + 'px' }} /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <br />

            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    {/* <Users /> */}
                </Route>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
}

export default Header;