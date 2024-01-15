import React from 'react'
import '../style/service.css'
import Card from './Small Components/Card'

const Service = () => {
  return (
    <>
    
    <div className='service-heading'>
          <p>Most Popular Services</p>
        </div>
      <div className='service-container'>
         
            <Card/>
            <Card/>

            <Card/>
        </div>
    </>
  )
}

export default Service