import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {


    const dispatch = useDispatch();

    const popularMovies = useSelector(store => store.movies.popularMovies);

    //Fetch data from TMDB Api and update the store 
    const getPopularMovies = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzQ0MDQyYTQ1MTRkMTM3ODkzYmEwMDc4MzNkNzE1NCIsInN1YiI6IjY0ZmMyZmM5Zjg1OTU4MDBjNTliMDBiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pHDUfq8p1DLmJb-xCuU0W8Zpju6QMcaTZyTQT3Qof0M'
            }
        };
        const data = await axios.get("https://api.themoviedb.org/3/movie/popular", options)
        console.log(data.data);
        dispatch(addPopularMovies(data.data.results));
    }

    useEffect(() => {
        if (!popularMovies)
            getPopularMovies();
    }, [])
}

export default usePopularMovies