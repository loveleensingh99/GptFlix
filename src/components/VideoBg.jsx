import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ApiOptions } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBg = ({ movieId }) => {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    useMovieTrailer(movieId);
    return (
        <>

            <iframe className="w-[100%] aspect-video " src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share ">
            </iframe >
        </>
    )
}

export default VideoBg