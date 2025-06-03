import React from 'react'

const Card = ({image , title}) => {
  return (
    <div className='card'>
        <img className='card-image' src={image} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default Card
