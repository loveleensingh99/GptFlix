import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'


const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies)
    console.log("🚀 ~ file: SecondaryContainer.jsx:9 ~ SecondaryContainer ~ movies:", movies)
    return (
        <>
            {movies &&
                <div className='pl-12 bg-black'>
                    <div className="relative z-20 -mt-44">
                        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                    </div>
                    <MoviesList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
                    <MoviesList title={"Popular Movies"} movies={movies.popularMovies} />
                    <MoviesList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
                    <MoviesList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
                </div>}
        </>
    )
}

export default SecondaryContainer