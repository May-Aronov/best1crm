import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Serch extends Component {
    constructor() {
        super();
        this.state = {
            SearchText: "",
            FilterName: "name"
        }
    }

    handleChange=(e)=>{
        this.setState({ [e.target.name]: e.target.value },()=>{
        this.props.filterClients(this.state.SearchText, this.state.FilterName)})
    }

    render() {
        return (
            <div>
               <input name="SearchText" type="text" value={this.props.SearchText} onChange={this.handleChange}/>
               <select name='FilterName' value={this.props.FilterName} onChange={this.handleChange}>
                    <option value='name'>Name</option>
                    <option value='owner'>Owner</option>
                    <option value='country'>Country</option>
                    <option value='emailType'>Email</option>
                    <option value='sold'>Sold</option>
                </select>
            </div>
        )
    }
}

export default Serch