import { AnimeInfoLabel } from './AnimeInfoLabel'
import React, { useEffect } from 'react'
import { FetchService } from '../../services/fetch'
import { useSelector } from 'react-redux'
import { LoadingAnimation } from '../../Components/common/LoadingAnimation'


export const Home = React.memo(() => {

    const { IsLoading } = useSelector((state) => state.Operation)
    const { Order, HomePageData, Genre } = useSelector((state) => state.Data)
    const { FetchHandler } = FetchService()

    console.log("Home render")

    useEffect(() => {
        FetchHandler()
    }, [Order, Genre])

    return (
        <section className='home' >
            {IsLoading === true ? <LoadingAnimation /> : <img src={HomePageData.image} alt='anime-label' className='anime-label-image' />}
            <AnimeInfoLabel />
        </section>
    )
})
