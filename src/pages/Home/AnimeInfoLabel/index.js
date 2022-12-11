import { BUTTON } from '../../../Components/common/BUTTON'
import { GenreAndStatus } from './GenreAndStatus'
import { useSelector } from 'react-redux'
import DOMPurify from 'dompurify';
import { useState } from 'react';



export const AnimeInfoLabel = () => {

    const [IsReadMoreActive, setIsReadMoreActive] = useState(true)
    const { HomePageData } = useSelector((state) => state.Data)

    console.log("AnimeInfoLabel render")

    return (
        <article className='anime-info-label'>
            <>
                <p className='label'>恐ろしいア</p>
                <h1 className='label-header'>{HomePageData.title}</h1>
                <article
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(HomePageData.synopsis) }}
                    className={IsReadMoreActive === true ? 'label-description ' : 'label-description ReadMore'}
                    onClick={() => setIsReadMoreActive((e => e = !e))}
                >
                </article>
                <BUTTON label="See More" href={HomePageData.link} />

                <GenreAndStatus />
            </>

        </article>
    )
}
