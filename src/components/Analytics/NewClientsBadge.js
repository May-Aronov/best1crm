import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
library.add(faChartLine);



class NewClientsBadge extends Component {
    constructor() {
        super()
        this.state = {
           monthNames : ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ]
        }
    }

    render() {
        let month=new Date().getMonth()
        return (        
                <span>
                     <FontAwesomeIcon icon="chart-line" size="5x" color="#2ecc71" />
                    <h1>{this.props.data}</h1>
                    <p>{`new ${this.state.monthNames[month]} Clients`}</p>
                </span>
        )
    }
}

export default NewClientsBadge