import React from 'react'
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export const SearchButton = ({ onClick }) => {
    return (
        <button className='search-button-component' onClick={onClick} >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
    )
}
