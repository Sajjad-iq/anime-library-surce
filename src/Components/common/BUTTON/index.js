import React from 'react'
import './index.css'

export const BUTTON = React.memo(({ label, href }) => {

    return (
        <a href={href} target="_blank" className='link' ><button className='button-component' dangerouslySetInnerHTML={{ __html: label }}></button></a>
    )
})
