import React from 'react'

const Landing = ({step}) => {
    return (
        <div className='Container'>
            <p>Mandalorian Quiz</p>
            <img src={process.env.PUBLIC_URL + '/baby-yoda.png'} alt='Baby Yoda'/>
            <button onClick={step}>Start Quiz</button>
        </div>
    )
}

export default Landing
