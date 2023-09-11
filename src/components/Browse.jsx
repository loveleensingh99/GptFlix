import React, { useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

export default function Browse() {

    useNowPlayingMovies()
    return (
        <>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </>
    )
}
