import React, { Component } from 'react';
import { BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts';

class CountrySales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SaleSubject: "country",
            chartdata:this.props.topEmployees(this.props.data,"country")
        }
        console.log(this.state.chartdata);
        
    }

    

    handleChange=(e)=>{
      this.setState({SaleSubject:e.target.value},()=>{
      let Chartdata=this.props.topEmployees(this.props.data,this.state.SaleSubject)
      this.setState({chartdata:Chartdata})
      })     
    }



    render() {
        return (
            <div>
               <span>Sales BY</span>
               <select onChange={this.handleChange} value={this.state.SaleSubject} >
                <option  value="country">Country</option>
                <option value="emailType">Email</option>
                <option value="owner">Owner</option>
                </select>   
                <div>
                <ResponsiveContainer width={950} height={200}>
                    <BarChart width={400} height={150}  data={this.state.chartdata}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >        
                        <XAxis type="category" dataKey="owner"/>
                        <YAxis  type='number'/>
                        <Tooltip />
                        <Bar  barSize={75} maxBarSize={80}  dataKey="sales" fill="#003f5c" />
                    </BarChart>
                </ResponsiveContainer>
                </div>
            </div>
        )
    }
}
export default CountrySales
