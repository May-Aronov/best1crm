import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class ToggleClients extends Component {
 
    render() {
        return (
            <div>
                <button onClick={this.props.Backwards}> &lt;  </button>
                <span>{this.props.startpage}-{this.props.endpage}</span>
                <button onClick={this.props.Forward}> &gt; </button>
            </div>
        )
    }
}

export default ToggleClients


