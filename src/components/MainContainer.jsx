import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBg from './VideoBg';

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    console.log("🚀 ~ file: MainContainer.jsx:8 ~ MainContainer ~ movies:", movies)

    if (!movies) return;
    const mainMovie = movies[0];
    console.log("🚀 ~ file: MainContainer.jsx:10 ~ MainContainer ~ mainMovie:", mainMovie)

    const { original_title, overview, id } = mainMovie

    return (
        <>
            <div className="md:pt-0 pt-[30%] bg-black">
                <VideoTitle original_title={original_title} overview={overview} trailerVideo={trailerVideo} tmdbId={id} />
                <VideoBg movieId={mainMovie.id} />
            </div>
        </>
    )
}

export default MainContainer