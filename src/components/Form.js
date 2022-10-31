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
  
  render() {
    return (
      <form className='resy-form'>
        <label htmlFor='name'/>
        <input type='input' className='inputs' name='name' id='name' placeholder='Name'/>
        <label htmlFor='date'/>
        <input type='date' className='inputs' name='date' id='date'/>
        <label htmlFor='time'/>
        <input type='time' className='inputs' name='time' id='time'/>
        <label htmlFor='number'/>
        <input type='input' className='inputs' name='number' id='number' placeholder='Number of guests'/>
        <button type='submit' className='inputs' >Make Reservation</button>
      </form>
    )
  }
}

export default Form
