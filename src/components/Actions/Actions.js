import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import AddClient from './AddClient'
import UpdateClient from'./Update'
import Update from './Update';
class Actions extends Component {

    render() {
        return(
                <div>
                   <Update/>
                   <AddClient/>
                </div>     
        )
    }
}

export default Actions