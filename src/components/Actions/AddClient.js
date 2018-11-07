import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
const axios = require('axios')
class AddClient extends Component {

    constructor() {
        super()
        this.state = {
            "FirstName": "",
            "Surname": "",
            "Country": "",
            "Owner": "",
            "Email": ""

        }
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    AddClient=async()=>{
        await axios.post('http://localhost:8080/actions/newclient', {
            name: `${this.state.FirstName} ${this.state.Surname}`,
            email: this.state.Email,
            owner: this.state.Owner,
            country: this.state.Country      
        })
    }

    render() {
        return (
            <div>
                <h4>Add Client</h4>
                <div>
                    <span>First Name:</span>  <input value={this.state.FirstName} name="FirstName" onChange={this.handleInput} type="text"/>
                    <span>Surname:</span> <input value={this.state.Surname} name="Surname" onChange={this.handleInput} type="text" />
                    <span>Country:</span> <input value={this.state.Country} name="Country" onChange={this.handleInput} type="text" />
                    <span>Owner:</span>   <input value={this.state.Owner} name="Owner" onChange={this.handleInput} type="text" />
                    <span>Email:</span>   <input value={this.state.Email} name="Email" onChange={this.handleInput} type="text" />
                </div>
                <button type="button" onClick={this.AddClient}>Add New Client</button>
            </div>
        )
    }
}

export default AddClient