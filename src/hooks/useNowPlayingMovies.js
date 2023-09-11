import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';

export const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    //Fetch data from TMDB Api and update the store 
    const getNowPlayingMovies = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzQ0MDQyYTQ1MTRkMTM3ODkzYmEwMDc4MzNkNzE1NCIsInN1YiI6IjY0ZmMyZmM5Zjg1OTU4MDBjNTliMDBiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pHDUfq8p1DLmJb-xCuU0W8Zpju6QMcaTZyTQT3Qof0M'
            }
        };
        const data = await axios.get("https://api.themoviedb.org/3/movie/now_playing?page=1", options)
        console.log(data.data);
        dispatch(addNowPlayingMovies(data.data));
    }

    useEffect(() => {
        getNowPlayingMovies()
    }, [])

}
