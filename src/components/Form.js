import React from 'react'

const Form = () => {
  return (
    <form className='resy-form'>
      <label htmlFor='name'/>
      <input type='input' name='name' id='name' placeholder='Name'/>
      <label htmlFor='date'/>
      <input type='date' name='date' id='date'/>
      <label htmlFor='time'/>
      <input type='time' name='time' id='time'/>
      <label htmlFor='number'/>
      <input type='input' name='number' id='number' placeholder='Number of guests'/>
      <button type='submit'>Make Reservation</button>
    </form>
  )
}

export default Form
