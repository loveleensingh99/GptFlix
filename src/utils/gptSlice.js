import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        moviesResults: null,
        movieNames: null,

    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addSearchBarResults: (state, action) => {
            const { tmdbResultsMoviesArr, gptMoviesArr } = action.payload;
            console.log("🚀 ~ file: gptSlice.js:17 ~  movieResults, movieNames:", tmdbResultsMoviesArr, gptMoviesArr)

            state.moviesResults = tmdbResultsMoviesArr;
            state.movieNames = gptMoviesArr;
        }

    }
}
)

export const { toggleGptSearchView, addSearchBarResults } = gptSlice.actions;
export default gptSlice.reducer;
