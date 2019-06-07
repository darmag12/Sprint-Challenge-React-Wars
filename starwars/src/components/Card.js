import React from 'react'
import './StarWars.css'

const Card = (props) => {
    return (
        <div>
            <button className='btn'>\/</button>
            <h2 className='name'> {props.name}</h2>
            <h2 className='h2'>Gender: {props.gender}</h2>
            <h2 className='h2'>Height: {props.height}</h2>
            <h2 className='h2'>Mass: {props.mass}</h2>
            <h2 className='h2'>Hair Color: {props.hairColor}</h2>
            
            
        </div>
    )
}

export default Card;
