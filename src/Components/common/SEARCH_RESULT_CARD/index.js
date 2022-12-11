import React from 'react'
import DOMPurify from 'dompurify';

import './index.css'
export const SearchResultCard = React.memo(({ label, src, onClick }) => {
    return (
        <button onClick={onClick} className='search-result-card-component'>
            <img className='result-img' src={src} alt='result os search bar' />
            <h4 className='result-label' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(label) }}></h4>
        </button>
    )
})
