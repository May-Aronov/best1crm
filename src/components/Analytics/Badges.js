import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import HottestCountryBadge from './HottestCountryBadge';
import NewClientsBadge from './NewClientsBadge';
import OutstandingClients from './OutstandingClients';
import EmailBadge from './EmailBadge';

class Badges extends Component {
    constructor() {
        super()
        this.state = {  
        }
    }

    NewClients = (clients) => {

        let newclients =  clients.filter(c => {
            let clientYear = c.firstContact.substr(0,4);
            let clientmonth = c.firstContact.substr(5,2);
            let currentDate = new Date()
            return clientYear == currentDate.getFullYear() &&
                clientmonth == currentDate.getMonth()+1
        })
        return newclients.length
    }

    EmailsSents = (clients) => {
        let EmailsSent = clients.filter(c => {
            return c.emailType != null
        })
        return EmailsSent.length
    }

    NotSold = (clients) => {
        let OutstandingClients =  clients.filter(c => {
            return c.sold == false
        })
        return OutstandingClients.length

    }

    HottestCountry = (clients) => {
        let count;
        let MaxSalesC = 0
        let bestCountry = ""
        for (let i = 0; i < clients.length; i++) {
            count = 0;
            let currentCountry = clients[i].country;
            for (let j = i + 1; j < clients.length; j++) {
                if (clients[j].country == currentCountry &&
                    clients[j].sold == true) {
                    count++
                }
            }
            if (count > MaxSalesC) {
                MaxSalesC = count
                bestCountry = currentCountry
            }
        }
        return bestCountry
    }


    render() {
        let clients=this.props.clients
        console.log(clients);
 
        return (
            <span>
                <NewClientsBadge data={this.NewClients(clients)} />
                <EmailBadge data={this.EmailsSents(clients)} />
                <OutstandingClients data={this.NotSold(clients)} />
                <HottestCountryBadge data={this.HottestCountry(clients)} />
            </span>
        )
    }
}

export default Badges