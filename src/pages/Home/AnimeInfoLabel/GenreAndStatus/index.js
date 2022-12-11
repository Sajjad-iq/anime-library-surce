import React from 'react'
import { useSelector } from 'react-redux'


export const GenreAndStatus = React.memo(() => {
    const { HomePageData } = useSelector((state) => state.Data)

    return (
        <section className="genre-and-status-component">
            <section className='genre-and-status-wrapper'>
                <section className='genre-and-status-element'>
                    <h3 className='header'>Genre</h3>
                    <section className='result-wrapper'>
                        {HomePageData.genres.map((e, i) => {
                            return i === HomePageData.genres.length - 1 ? <section className='small-container' key={i}>{e}</section> : <section className='small-container' key={i}>{e} <div className='vertical-line'></div></section>
                        })}
                    </section>
                </section>

                <section className='genre-and-status-element'>
                    <h3 className='header'>Status</h3>
                    <p className='p-name'>{HomePageData.status}</p>
                </section>

                <section className='genre-and-status-element'>
                    <h3 className='header'>Episodes</h3>
                    <p className='p-name'>{HomePageData.episodes}</p>
                </section>
            </section>

        </section>
    )
})
