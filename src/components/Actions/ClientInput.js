import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class ClientInput extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
        }

    }
    handleChange = (e) => {
        this.setState({ name: e.target.value }, () => {
            this.props.handleClientName(this.state.name)
        })
    }

    render() {
        return (
            <form>
                Client:  <input list='clients' value={this.name} name="clientname" onChange={this.handleChange} />
                <datalist id="clients">
                    {
                        this.props.getClients().map(c => { return <option value={c}>{c} </option> })
                    }
                </datalist>

            </form>
        )
    }
}

export default ClientInput