import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class ClientsHeaders extends Component {
    render() {
        return (
            <div className='clients-header row'>
                <span className="column">Name</span>
                <span className="column">Surname</span>
                <span className="column">Country</span>
                <span className="column">First Contact</span>
                <span className="column">Email</span>
                <span className="column">Sold</span>
                <span className="column">Owner</span>
            </div>
        )
    }
}

export default ClientsHeaders