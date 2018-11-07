import React, { Component } from 'react';
import { BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts';
class TopEmployees extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //       data:this.props.data
    //     }
    // }
    render() {
        let data = this.props.data
        return (
            <div>
                <ResponsiveContainer width={450} height={200}>
                    <BarChart width={250} height={100} layout="vertical" data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >        
                        <XAxis type='number'  />
                        <YAxis type="category" dataKey="owner"   />
                        <Tooltip />
                        <Legend />
                        <Bar  barSize={18}  dataKey="sales" fill="#003f5c" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        )
    }
}
export default TopEmployees

