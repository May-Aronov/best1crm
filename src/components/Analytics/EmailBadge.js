import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
library.add( faEnvelope);




class EmailBadge extends Component {
    constructor() {
        super()
        this.state = {
           
        }
    }

    render() {
        return(
                <span>
                    <FontAwesomeIcon icon="envelope" size="5x" color="#3498db" />
                    <h1>{this.props.data}</h1>
                    <p>Emails Sent</p>
                </span>     
        )
    }
}

export default EmailBadge