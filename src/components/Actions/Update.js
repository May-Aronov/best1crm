
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ClientInput from './ClientInput'
import AddClient from './AddClient';
import { isThisTypeNode } from '../../../node_modules/typescript';
const axios = require('axios')

class Update extends Component {
    constructor() {
        super()
        this.state = {
            ClientData: {
                name:"",
                owner:"",
                id:"",
            },
            AllClients: [],
            newOwner: "",
            newEmail: ""
        }
    }

    // findClient = () => {
    //     for (let i = 0; i < this.state.AllClients.length; i++) {
    //         const client = this.state.AllClients[i]
    //         if (client.name == this.state.clientname) {
    //             return i
    //         }

    //     }

    // }
    handleTransfer = async () => {
        if (this.state.newOwner == "" || this.state.clientname == "") { return alert("what are U doing? it's empty") }
        await axios.put(`http://localhost:8080/actions/owner/${this.state.ClientData.id}`, { owner: `${this.state.newOwner}` })
        // let index = this.findClient()
        // let clientsCopy = [...this.state.AllClients]
        // clientsCopy[index].owner = this.state.newOwner
        // this.setState({ AllClients: clientsCopy })

    }
    handleEmail = async () => {
        if (this.state.newEmail == "" || this.state.clientname == "") { return alert("what are U doing? it's empty") }
        await axios.put(`http://localhost:8080/actions/email/${this.state.ClientData.id}`, { email: `${this.state.newEmail}` })
        // let index = this.findClient()
        // let clientsCopy = [...this.state.AllClients]
        // clientsCopy[index].emailType = this.state.newEmail
        // this.setState({ AllClients: clientsCopy })

    }
    handlesale = async () => {
        if (this.state.clientname == "") { return alert("what are U doing? it's empty") }
        await axios.put(`http://localhost:8080/actions/sale/${this.state.ClientData.id}`, { sale: true })
        // let index = this.findClient()
        // let clientsCopy = [...this.state.AllClients]
        // clientsCopy[index].sold = "true"
        // this.setState({ AllClients: clientsCopy })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleClientName = async(name) => {
            try {
                let clientData = await axios.get(`http://localhost:8080/actions/${name}`)
                this.setState({ ClientData: clientData.data[0] })
                console.log(clientData)
            }
            catch (error) {
                alert("Client name inncorrect! pls choose other client from the list");
                throw error;
            } 
            console.log(this.state.ClientData)
    }


    componentDidMount = async () => {
        let data = await axios.get('http://localhost:8080/clients')
        this.setState({ AllClients: data.data })
    }



    getOwners = () => {
        const owners = this.state.AllClients.map(c => c.owner)
        return owners
    }
    getClients = () => {
        const clients = this.state.AllClients.map(c => c.name)
        return clients
    }

    render() {
        return (
            <div>
                <ClientInput getClients={this.getClients} handleClientName={this.handleClientName} />
                <div>
                    <div>
                        <span> Transfer Ownership to</span>
                        <select onChange={this.handleChange} value={this.state.newOwner} name="newOwner" >
                            <option value="null" > select owner </option>
                            {this.getOwners().map(o => { return <option value={o} > {o}</option> })}

                        </select>
                        <span onClick={this.handleTransfer}> Transfer </span>
                    </div>
                    <div>
                        <span> Send email:</span>
                        <select onChange={this.handleChange} value={this.state.newEmail} name="newEmail" >
                            <option value="null" > select email type </option>
                            <option value="A" > A </option>
                            <option value="B" > B </option>
                            <option value="C" > C </option>
                            <option value="D" > D  </option>
                        </select>
                        <span onClick={this.handleEmail}>Send</span>
                    </div>
                    <div> Declare sale! <span onClick={this.handlesale}> Declare </span> </div>
                </div>
            </div>
        )
    }
}

export default Update