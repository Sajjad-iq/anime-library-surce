import React, { useCallback, useEffect, useState } from 'react'
import { Input } from '../../Components/common/INPUT'
import { SearchResult } from './SearchResult'
import { FetchService } from '../../services/fetch'
import { CloseButton } from '../../Components/common/CLOSE_BUTTON'
import { useDispatch, useSelector } from 'react-redux'
import { setIsUserType, setIsSearchFiledActive } from '../../Redux/AppStatesSlice/OperationsStatesSlice'

export const SearchField = React.memo(() => {

    const { IsTextValid, IsSearchFiledActive } = useSelector((state) => state.Operation)
    const dispatch = useDispatch()

    const { FetchSearchHandler } = FetchService()
    const [input, setInput] = useState("")

    const inputActiveTrigger = useCallback(() => dispatch(setIsSearchFiledActive((!IsSearchFiledActive))), [dispatch, IsSearchFiledActive])

    const inputChange = useCallback((e) => {
        setInput(e.target.value)
        input === "" ? dispatch(setIsUserType(false)) : dispatch(setIsUserType(true))
    }, [setInput, IsTextValid])

    useEffect(() => {
        const timer = setTimeout(() => {
            FetchSearchHandler(input)
        }, 1000);
        return () => clearTimeout(timer);
    }, [input])

    return (
        <section className={IsSearchFiledActive === true ? 'search-field' : 'search-field hidden'}>
            <section className='wrapper'>
                <section className='search-wrapper'>
                    <Input className={IsTextValid === false ? "isInvalid" : ""} onChange={inputChange} />
                    <CloseButton onClick={inputActiveTrigger} />
                </section>
                <SearchResult />

            </section>
        </section>
    )
})
