import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',
    }
  }
  sendReservation = e => {
    e.preventDefault();
    const newResy = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newResy)
  }

  handleChange = async (e) => {
   await this.setState({[e.target.name]: e.target.value})
    
  }

  render() {
    return (
      <form className='resy-form'>
        <label htmlFor='name'/>
        <input type='input' className='inputs' name='name' id='name' value={this.state.name} onChange={event => this.handleChange(event)} placeholder='Name'/>
        <label htmlFor='date'/>
        <input type='date' className='inputs' name='date' id='date' value={this.state.date} onChange={event => this.handleChange(event)}/>
        <label htmlFor='time'/>
        <input type='time' className='inputs' name='time' id='time' value={this.state.time} onChange={event => this.handleChange(event)}/>
        <label htmlFor='number'/>
        <input type='input' className='inputs' name='number' id='number' value={this.state.number} onChange={event => this.handleChange(event)} placeholder='Number of guests'/>
        <button className='inputs' onClick={event => this.sendReservation(event)}>Make Reservation</button>
      </form>
    )
  }
}

export default Form
