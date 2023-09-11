import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBg from './VideoBg';

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    console.log("🚀 ~ file: MainContainer.jsx:8 ~ MainContainer ~ movies:", movies)

    if (!movies) return;
    const mainMovie = movies[0];
    console.log("🚀 ~ file: MainContainer.jsx:10 ~ MainContainer ~ mainMovie:", mainMovie)

    const { original_title, overview } = mainMovie

    return (
        <>
            <VideoTitle original_title={original_title} overview={overview} />
            <VideoBg movieId={mainMovie.id} />
        </>
    )
}

export default MainContainer