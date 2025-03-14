import React, { Component } from 'react';
import Reservations from '../components/Reservations';
import getReservations from '../APIcalls';
import './App.css';
import Form from '../components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }
  componentDidMount() {
    getReservations()
    .then(data => this.setState({reservations: data}))
    .catch(err => console.log(err))
  }

  addReservation = (newResy) => {
    this.setState({reservations: [...this.state.reservations, newResy]})
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
