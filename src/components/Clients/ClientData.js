import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import '../../ClientData.css';
import Popup from 'reactjs-popup'
const axios = require('axios')

class ClientData extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
            newclient: { name: "", surname: "", country: "" }
        }
    }

    openModal = () => {
        this.setState({ open: true })
    }

    closeModal = () => {
        this.setState({ open: false })
    }

    handleChange = (e) => {
        let client = {...this.state.newclient}
        client[e.target.name] = e.target.value
        this.setState({ newclient: client })
    }

    onSubmit = (event) => {
        event.preventDefault()
        let Nclient = {...this.state.newclient}
        let id=this.props.client.id
        this.props.onSubmit(Nclient,id)
     
        this.closeModal()
    }

    render() {
        let client = this.props.client;
        let fullname = client.name.split(" ")

        return (
            <div className="row button" onClick={this.openModal}>
                <span className="column"> {fullname[0]} </span>
                <span className="column"> {fullname[1]}</span>
                <span className="column"> {client.country} </span>
                <span className="column"> {client.firstContact}</span>
                <span className="column"> {client.emailType ? client.emailType : "-"}</span>
                <span className="column">{client.sold ? '✔' : "-"} </span>
                <span className="column">{client.owner} </span>


                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <div className="modal">
                        <a className="close" onClick={this.closeModal}>
                            &times;
                       </a>
                        <form className="form" onSubmit={this.onSubmit} >
                             Name: <input type="text" name="name" value={this.state.newclient.name} onChange={this.handleChange} /> 
                             Surname: <input name="surname" type="text" value={this.state.newclient.surname} onChange={this.handleChange} /> 
                             Country: <input name="country" type="text" value={this.state.newclient.Country} onChange={this.handleChange} /> 
                             <button type="sumbit">Update</button>
                        </form>
                    </div>
                </Popup>
            </div>
        )
    }
}

export default ClientData