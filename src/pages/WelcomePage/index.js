import React, { useEffect, useState } from 'react'
import logo from "../../assets/icons/logo.png"
import { LoadingAnimation } from '../../Components/common/LoadingAnimation'

export const WelcomePage = React.memo(() => {

    const [IsWelcomePageActive, setIsWelcomePageActive] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsWelcomePageActive(false)
        }, 3900);
        return () => clearTimeout(timer);
    }, [])


    return (
        <section className={IsWelcomePageActive === true ? 'welcome-page' : 'welcome-page hidden'}>
            <img className='logoIMG' src={logo} alt="logo" />
            <h1 className='app-name'>Anime List</h1>
            <p className='body'> Find your Favorite Anime</p>
            <LoadingAnimation />
        </section>
    )
})
