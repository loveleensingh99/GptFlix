import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({ title, movies }) => {
    console.log("🚀 ~ file: movieList.jsx:5 ~ MovieList ~ movies:", movies)
    return (
        <>
            <div className="flex flex-col ">
                <h1 className='px-5 py-3 text-xl font-bold text-white md:text-3xl'>{title}</h1>
                <div className="flex overflow-x-scroll custom-scrollbar">
                    <div className="flex gap-3 px-5">
                        {movies && movies.map((item) => (
                            <MovieCard posterPath={item.poster_path} key={movies.id} id={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoviesList