import React from 'react'
import '../style/contact.css'

const Contact = () => {
    return (
        <>
            <div className='contact-us-heading'>Welcome to TaxiHire Support</div>
            <div>
                <p className='contact-us-tagline'>We’re here to help. Looking for customer service contact information? Put your query in below form. Feel free to call us at below number.</p>
                <div className='form-add-container'>
                <div>
                <img className='contact-img' src ='https://www.shutterstock.com/shutterstock/photos/2143114885/display_1500/stock-vector-telephone-call-expert-to-generate-lead-or-sales-success-telemarketing-tell-promotion-to-prospect-2143114885.jpg' alt ='phone'></img>

                </div>
                    <div className='query-form'>
                        <input placeholder='Full Name'></input>
                        <input placeholder='Mobile Number'></input>
                        <input placeholder='Email Id'></input>
                        <textarea placeholder='Enter Query'></textarea>
                        <button className='submit-btn'>Submit</button>
                    </div>

                    <div className='contact-address'>
                        <h2>Address</h2>
                        <p>TaxiHire Bookings <br /> Datta Mandir Road, Near Gurudwara, Manmad</p>
                        <p>+91 7276802907</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact 