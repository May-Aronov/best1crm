import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Clients from './components/Clients/Clients';
import Actions from './components/Actions/Actions';
import Analytics from './components/Analytics/Analytics'
import Navbar from './components/Navbar/Navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/clients" exact render={() => <Clients/>} />
          <Route path="/actions" exact render={() => <Actions/>} />
          <Route path="/analytics" exact render={() => <Analytics/>} />
        </div>
      </Router>
    );
  }
}

export default App;




  //   constructor() {
  //     super()
  //     this.state = {
  //      clients: []
  //     }
  // }


  // componentDidMount = () => {
  //   setTimeout(() => {
  //     let data = require('../data.json')
  //     let clientsCopy = [...this.state.clients]
  //     clientsCopy=data
  //     this.setState({ clients:clientsCopy })
  //   }, 100)  
  // }
