import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearchComponent from './GptSearchComponent';

export default function Browse() {

    const showGptSearch = useSelector(store => store.gpt.showGptSearch)
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies();
    useUpcomingMovies()

    return (
        <>
            <Header />
            {showGptSearch ? < GptSearchComponent />
                : <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            }
        </>
    )
}
