import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Data: [],
    SearchData: [],
    HomePageData: {
        title: "Fullmetal Alchemist: Brotherhood",
        synopsis: "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry.Known as a bio- mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing automail, a tough, versatile metal used in robots and combat armor.After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.As Edward becomes an infamous alchemist and gains the nickname Fullmetal,the boys journey embroils them in a growing conspiracy that threatens the fate of the world.",
        image: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
        link: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
        genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
        episodes: 64,
        status: "Finished Airing",
        _id: "5114"
    },
    Order: 20,
    Genre: "Adventure"
}

const DataSlice = createSlice({
    name: "Data",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.Data = action.payload
        },
        setSearchData: (state, action) => {
            state.SearchData = action.payload
        },
        setHomePageData: (state, action) => {
            state.HomePageData = action.payload
        },
        setOrder: (state) => {
            state.Order = state.Order + 10
        },
        setGenre: (state, action) => {
            state.Genre = action.payload
        }
    }
})

export default DataSlice.reducer
export const { setData, setSearchData, setHomePageData, setOrder, setGenre } = DataSlice.actions