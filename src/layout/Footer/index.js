import React from 'react'
import logo from '../../assets/icons/logo.png'
export const Footer = React.memo(() => {
    return (
        <footer>
            <section className='header'>
                <img className='logo' src={logo} alt="logo" />
                <h1 className='app-name'>Anime Library</h1>
            </section>
            <p className='desc'>Copyright 2022 Library "Anime Library"
                Design by "AnimeGate" WebSite
            </p>
        </footer>
    )
})
