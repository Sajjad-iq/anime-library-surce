import React from 'react'
import { useSelector } from 'react-redux'

export const ErrorPage = () => {
    const { IsError } = useSelector((state) => state.Operation)

    return (
        <section className={IsError === true ? 'error-page' : 'error-page hidden'}>
            <section className='wrapper'>
                <h1 className='header'>Sorry,Something Wrong..</h1>
                <p className='body'>Please try again</p>
            </section>
        </section>
    )
}
