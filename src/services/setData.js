import { useDispatch, useSelector } from 'react-redux'
import { setOrder } from "../Redux/DataSlice"


export const SetDataService = () => {
    const { IsSearchPageActive } = useSelector((state) => state.Operation)
    const dispatch = useDispatch()

    const incrementTheOrder = () => {
        if (IsSearchPageActive === true) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            dispatch(setOrder())
        } else {
            dispatch(setOrder())
        }
    }

    return { incrementTheOrder }
}
