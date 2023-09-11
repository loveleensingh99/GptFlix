import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies, addTrailerVideo } from '../utils/movieSlice';
import { ApiOptions } from '../utils/constants';

export default function useMovieTrailer(movieId) {
    const dispatch = useDispatch();
    //fetching trailer video and updating the store with trailer video data

    const fetchMovie = async () => {

        const fetchData = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, ApiOptions)
        const filterData = fetchData.data.results.filter((item) => (
            item.type === "Trailer"
        ))
        const trailer = filterData.length > 0 ? filterData[0] : fetchData[0];
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        fetchMovie()
    }, [])

}
