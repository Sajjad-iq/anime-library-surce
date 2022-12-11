import React, { useCallback } from 'react'
import { AnimeCard } from '../../Components/common/ANIME_CARD'
import { SetDataService } from '../../services/setData'
import { LoadMore } from '../../Components/common/MORE_BUTTON'
import { useDispatch, useSelector } from 'react-redux'
import { setHomePageData } from '../../Redux/DataSlice'
import { setIsSearchPageActive } from '../../Redux/AppStatesSlice/OperationsStatesSlice'
import { LoadingAnimation } from '../../Components/common/LoadingAnimation'
import { Header } from './header'
export const AnimeList = () => {

    const { IsSearchPageActive, IsLoading } = useSelector((state) => state.Operation)
    const { Data } = useSelector((state) => state.Data)
    const { incrementTheOrder } = SetDataService()
    const dispatch = useDispatch()

    const onCardClickCallback = useCallback((e) => {
        dispatch(setHomePageData(e))
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [setHomePageData, dispatch])

    const setOrderCallback = useCallback(() => {
        dispatch(setIsSearchPageActive(false))
        incrementTheOrder()
    }, [dispatch, incrementTheOrder, IsSearchPageActive])

    console.log("anime list render")

    return (
        <section className='anime-list-page'>
            <Header />
            <section className='cards-container'>
                {Data.map((e) => {
                    return <AnimeCard onClick={() => onCardClickCallback(e)} src={e.image} header={e.title} key={e._id} />
                })}
            </section>

            {IsLoading === true ? <LoadingAnimation /> : ""}
            <LoadMore Label={IsSearchPageActive === true ? "Back Home" : "More"} onClick={setOrderCallback} />
        </section>
    )
}
