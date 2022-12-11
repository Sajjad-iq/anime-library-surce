import React from 'react'
import './index.css';

export const LoadMore = React.memo(({ Label, onClick }) => {
    return (
        <button className='load-more' onClick={onClick} dangerouslySetInnerHTML={{ __html: Label }}></button>
    )
})
