import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { setData, setSearchData } from "../Redux/DataSlice"
import { setIsLoading, setIsUserType, setIsTextValid, setIsError } from "../Redux/AppStatesSlice/OperationsStatesSlice"


export const FetchService = () => {

    const { Order, Genre } = useSelector((state) => state.Data)
    const dispatch = useDispatch()

    const options = {
        method: 'GET',
        url: 'https://anime-db.p.rapidapi.com/anime',
        params: {
            page: '1', size: Order.toString(), sortOrder: 'asc', genres: Genre,
        },
        headers: {
            'X-RapidAPI-Key': '2004fcbf52msh46506c122990b42p16dccbjsn08c1c113c7db',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
        }
    };


    const FetchHandler = async () => {
        try {
            dispatch(setIsLoading(true))
            dispatch(setIsError(false))
            let res = await axios.request(options)
            let { data } = res.data;
            dispatch(setData((data)))
            console.log(data)
            dispatch(setIsLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(setIsError(true))
        }
    }





    const FetchSearchHandler = async (text) => {

        const reg = /[^a-zA-Z1-9 \s]/g
        const res = reg.test(text)

        const SearchOptions = {
            method: 'GET',
            url: 'https://anime-db.p.rapidapi.com/anime',
            params: { page: '1', size: '30', search: text, sortOrder: 'asc' },
            headers: {
                'X-RapidAPI-Key': '2004fcbf52msh46506c122990b42p16dccbjsn08c1c113c7db',
                'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
            }
        };

        if (text === "") {
            dispatch(setIsTextValid(true))
            return dispatch(setIsUserType(false))
        }
        if (res === true) {
            return dispatch(setIsTextValid(false))
        }
        if (res === false && text !== "") {
            try {
                dispatch(setIsLoading(true))
                dispatch(setIsError(false))
                dispatch(setIsUserType(true))
                dispatch(setIsTextValid(true))
                let res = await axios.request(SearchOptions)
                let { data } = res.data;
                dispatch(setSearchData(data))
                console.log(data)
                dispatch(setIsLoading(false))
            } catch (err) {
                dispatch(setIsError(true))
                console.error(err)
            }
        }
    }


    return { FetchHandler, FetchSearchHandler }
}
