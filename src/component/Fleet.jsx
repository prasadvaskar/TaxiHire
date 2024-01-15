import React from 'react'
import '../style/fleet.css'
import Cars from './Small Components/Cars'


const Fleet = () => {
  return (
    <div className='fleet'>
      <h1>Our Fleet</h1>
      <div className='fleet-container'>
        <Cars />
        <Cars />
        <Cars />

      </div>
    </div>
  )
}

export default Fleet