import React from 'react'
import './index.css';
export const Input = React.memo(({ onChange, onSubmit, className }) => {
    return (
        <input onSubmit={onSubmit} onChange={onChange} type={"text"} className={`search-bar ${className}`} />
    )
})
