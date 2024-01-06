import React from 'react'
import '../style/banner.css'
import ReactWhatsappButton from 'react-whatsapp-button'

const Banner = () => {
    return (
        <>
            <div className='banner-div'>
                <img className='banner-img' src="https://img.freepik.com/free-vector/city-taxi-transport-poster_1284-24744.jpg?t=st=1704358742~exp=1704359342~hmac=12102877a08f46ac6da29d2d1e0f30acb2633a57f2994a7e999294b5af04ccaf" alt='car-banner'></img>
                <div>
                <p className='brand-line'>Go anywhere with <br/>TaxiHire</p>
                <p>Your Journey, Your Way: Trusted Rides, Budget-Friendly Fares, Effortless Experience.</p>
                </div>
                
            </div>

            <ReactWhatsappButton
                countryCode="91"
                phoneNumber="7276802907"
            />
        </>

    )
}

export default Banner