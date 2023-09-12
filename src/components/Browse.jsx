import React, { useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

export default function Browse() {

    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies();
    useUpcomingMovies()
    return (
        <>
            <Header />
            <MainContainer />
            <SecondaryContainer />

        </>
    )
}
