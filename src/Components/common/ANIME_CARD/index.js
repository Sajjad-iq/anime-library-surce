import React from 'react'
import './index.css'

export const AnimeCard = React.memo(({ src, onClick }) => {
    return (
        <button className='anime-card' onClick={onClick}>
            <img className='card-img' src={src} alt="anime-card" />
        </button>
    )
})
