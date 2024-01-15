import React from 'react'
import '../../style/Small Styles/card.css'

const Card = () => {
    return (
        <div className='card'>
            <div className='card-container'>
                <img src='https://img.freepik.com/free-vector/taxi-transfer-abstract-concept-illustration_335657-1847.jpg?size=626&ext=jpg&ga=GA1.1.2094712075.1704341680&semt=ais' alt='airport Taxi'></img>
                <p className='text-overlay'>Airport Transfer</p>
            </div>
        </div>
    )
}

export default Card