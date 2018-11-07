import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <nav>
                <div className="main-links">
                    <Link to="/clients">Clients</Link>
                    <Link to="/actions">Actions</Link>
                    <Link to="/analytics">Analytics</Link>
                </div>
            </nav>
        )
    }
}

export default Navbar