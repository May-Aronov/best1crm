import React, { Component } from 'react';
import Badges from './Badges';
import Charts from './Charts';
const axios = require('axios')


class Analytics extends Component {
    constructor() {
        super()
        this.state = {
            clients: []
        }
    }
    componentDidMount = async () => {
        let data = await axios.get('http://localhost:8080/clients')
        console.log(data)
        this.setState({clients: data.data})       
    }

    render() {
        return(
                <div>
                 <div>  <Badges clients={this.state.clients}/></div>
                   <Charts clients={this.state.clients}/> 
                </div>     
        )
    }
}

export default Analytics