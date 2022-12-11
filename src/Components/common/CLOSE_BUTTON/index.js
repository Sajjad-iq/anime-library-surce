import React from 'react'
import './index.css'

export const CloseButton = React.memo(({ onClick }) => {
    return (
        <button className='close-btn-component' onClick={onClick}>X</button>
    )
})
