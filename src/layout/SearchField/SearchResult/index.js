import { useCallback } from 'react'
import { SearchResultCard } from '../../../Components/common/SEARCH_RESULT_CARD'
import { useDispatch, useSelector } from 'react-redux'
import { setHomePageData, setData } from '../../../Redux/DataSlice'
import { setIsSearchPageActive, setIsSearchFiledActive } from '../../../Redux/AppStatesSlice/OperationsStatesSlice'
import { LoadingAnimation } from '../../../Components/common/LoadingAnimation'
import { NotFoundResult } from '../../../Components/common/NOT_FOUND_RESULT'

export const SearchResult = () => {

    const { SearchData } = useSelector((state) => state.Data)
    const { IsUserType, IsLoading } = useSelector((state) => state.Operation)
    const dispatch = useDispatch()

    const onSearchCardClick = useCallback((data) => {
        dispatch(setHomePageData(data))
        dispatch(setIsSearchFiledActive(false))
        dispatch(setIsSearchPageActive(true))
        dispatch(setData(SearchData))
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [setHomePageData, dispatch, SearchData])

    return (
        <section className={IsUserType === true ? "search-result" : "search-result hidden"}>

            {SearchData.length === 0 && IsLoading === false ? <NotFoundResult /> : ""}
            {IsLoading === true ? <LoadingAnimation /> :
                <section className='result'>
                    {SearchData.map((e) => {
                        return <SearchResultCard onClick={() => onSearchCardClick(e)} key={e._id} src={e.thumb || ""} label={e.title || ""} />
                    })}
                </section>
            }

        </section>
    )
}
