import React from 'react'
import { options } from './options';
import { useDispatch } from 'react-redux'
import { setGenre } from '../../../Redux/DataSlice';

export const Header = React.memo(() => {
    const dispatch = useDispatch()

    return (
        <section className='anime_list-header'>
            <h1 className='header'>Popular Anime</h1>
            <select className='selector' onChange={(e) => dispatch(setGenre(e.target.value))}>
                {options.map((option, index) => (
                    <option className='option' key={index} value={option.label}>{option.label}</option>
                ))}
            </select>
        </section>
    )
})
