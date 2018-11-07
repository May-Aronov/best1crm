import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faUserCircle);


class OutstandingClients extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <span>
                <FontAwesomeIcon icon="user-circle" size="5x" color="#e74c3c" />
                <h1>{this.props.data}</h1>
                <p>Outstanding Clients</p>
            </span>
        )
    }
}

export default OutstandingClients