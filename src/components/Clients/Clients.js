import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import ClientsHeaders from './ClientsHeaders';
import ClientData from './ClientData';
import ToggleClients from './ToggleClients'
import Serch from './Serch'
import { isThisTypeNode } from '../../../node_modules/typescript';
const axios = require('axios')

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            clients: [],
            clientsdisplay: [],
            filterclients:[],
            startpage: 0,
            endpage: 0
        }
    }

    filterClients=(SearchText, FilterName)=>{
        let filter= this.state.clients.filter(c=>{
         return   c[FilterName].toUpperCase().includes(SearchText.toUpperCase());
        });
        this.setState({filterclients: filter,startpage: 0,  endpage: 0},()=>{
            this.Forward()
        })
    }
    findClient = (id) => {
        for (let i = 0; i < this.state.clients.length; i++) {
            const client = this.state.clients[i]
            if (client.id == id) {
                return i
            }
        }
    }

    onSubmit = async (Nclient, id) => {
        let clientsCopy = [...this.state.clients]
        let index = this.findClient(id)
        let client = { ...clientsCopy[index] }
        let fullname = client.name.split(" ")
        if (Nclient.country != "") {
            client.country = Nclient.country
        }
        if (Nclient.name != "") {
            fullname[0] = Nclient.name
        }
        if (Nclient.surname != "") {
            fullname[1] = Nclient.surname
        }
        let name = fullname[0].concat(' ', fullname[1])
        client.name = name
        clientsCopy[index] = client
        this.setState({ clients: clientsCopy })
        await axios.put(`http://localhost:8080/clients/${id}`, { name: `${name}`, country: `${Nclient.country}` })
    }

    componentDidMount = async () => {
        let data = await axios.get('http://localhost:8080/clients')
        this.setState({  filterclients: data.data , clients: data.data},()=>{
            this.Forward()
        })
        
    }

    renderClient = () => {
        return (
            <div>
                {this.state.clientsdisplay.map((c) => {
                    return <ClientData onSubmit={this.onSubmit} client={c} />
                })}
            </div>
        )
    }

    Backwards = () => {
        let allclients = this.state.filterclients;
        if (this.state.startpage == 0) {
            alert("can't go Backwards,it's the end of the road")
        }
        else {
            let Clientsdisplay = allclients.slice(this.state.startpage - 20, this.state.startpage)
            this.setState({ clientsdisplay: Clientsdisplay, endpage: this.state.startpage, startpage: this.state.startpage - 20 })
        }
    }

    Forward = () => {
        let Clientsdisplay;
        let allclients = this.state.filterclients;
        if (allclients.length >= this.state.endpage + 20) {
            Clientsdisplay = allclients.slice(this.state.endpage, this.state.endpage + 20)
            this.setState({ clientsdisplay: Clientsdisplay, startpage: this.state.endpage, endpage: this.state.endpage + 20 })
        }
        else if (allclients.length == this.state.endpage) {
            alert("can't go Forward,it's the end of the road")
        }
        else {
            Clientsdisplay = allclients.slice(this.state.endpage)
            this.setState({ clientsdisplay: Clientsdisplay, startpage: this.state.endpage, endpage: allclients.length })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Serch filterClients={this.filterClients}/>
                    <ToggleClients Forward={this.Forward} Backwards={this.Backwards} startpage={this.state.startpage} endpage={this.state.endpage} />
                </div>
                <ClientsHeaders />
                {this.renderClient()}
            </div>
        )
    }
}

export default Clients





// componentDidMount = () => {
//     this.props.Update()
// }

// Update=()=>{
//     setTimeout(() => {
//       let data = require('../data.json')
//       let clientsCopy = [...this.state.clients]
//       clientsCopy=data
//       this.setState({ clients:clientsCopy })
//     }, 100) 
//     } 