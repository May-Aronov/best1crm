import React, { Component } from 'react';
import TopEmployees from './TopEmployees';
import DateSales from './DateSales';
import CountrySales from './CountrySales';
import ClientAcquisition from './ClientAcquisition'
class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        
    }

    topEmployees=(clients,SaleSubject,diagramnum)=>{
        let ownersdata=[]
        let Owners=clients.filter(c =>{
            return c.sold == true
        })
        Owners= Owners.map(c=>{
           return  c[SaleSubject]
        })
        Owners.forEach(o => {
            let OwnerCount=this.FindCountOwners(o,Owners)
            if(!this.foundAllready(ownersdata,o)&& o != null){
                ownersdata.push({owner:o,sales:OwnerCount})
            }          
        });
        if(SaleSubject == "owner" && diagramnum == 1){
         this.sort(ownersdata)
         ownersdata=ownersdata.splice(0,3)
        }
         return ownersdata;
    }

    foundAllready=(ownerslist,ownername)=>{
        for(let owner in ownerslist){
            if( ownerslist[owner].owner === ownername){
                return true;
            }
        }
         return false;
    }

    FindCountOwners=(ownername,Owners)=>{
         let count=0;
         Owners.forEach(o =>{
            if(o == ownername){
                count++
            }
         })
         return count;
    }

    sort=(ownersdata)=>{
        ownersdata.sort(function(a, b){return b.sales-a.sales});
    }


    render() {
      let clients=this.props.clients
      console.log(clients)
        return (
            <div>
                  <TopEmployees data={this.topEmployees(clients,"owner",1)}/>
                  <CountrySales  data={clients} topEmployees={this.topEmployees} />
                  <DateSales/>
                  <ClientAcquisition/>
            </div>
        )
    }
}

export default Charts;





