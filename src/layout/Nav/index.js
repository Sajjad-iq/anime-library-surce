import React, { useCallback } from 'react'
import logo from '../../assets/icons/logo.png'
import { SearchButton } from '../../Components/common/SEARCH_BUTTON'
import { useDispatch, useSelector } from 'react-redux'
import { setIsSearchFiledActive } from '../../Redux/AppStatesSlice/OperationsStatesSlice'

export const Nav = React.memo(() => {

    const { IsSearchFiledActive } = useSelector((state) => state.Operation)
    const dispatch = useDispatch()

    const toggle = useCallback(() => {
        dispatch(setIsSearchFiledActive(!IsSearchFiledActive))
    }, [dispatch, IsSearchFiledActive])

    return (
        <nav className='nav'>
            <img src={logo} alt="logo" className='logo' />
            <SearchButton className={IsSearchFiledActive === true ? "hidden" : ""} onClick={toggle} />
        </nav>
    )
})
