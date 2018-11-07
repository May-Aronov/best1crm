import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';
library.add(faGlobeAmericas);



class HottestCountryBadge extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <span>
                <FontAwesomeIcon icon="globe-americas" size="5x" color="#f1c40f" />
                <h1>{this.props.data}</h1>
                <p>Hottest Country</p>
            </span>
        )
    }
}

export default HottestCountryBadge