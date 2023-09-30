import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const MovieSuggestionsList = ({ title, movies }) => {
    console.log("🚀 ~ file: MovieSuggestionsList.jsx:5 ~ MovieSuggestionsList ~ movies:", movies.id)

    return (
        <>
            <div className="flex flex-col justify-between gap-3 px-5" >
                <Link to={`https://www.themoviedb.org/movie/${movies?.id}`} target="_blank">
                    <h1 className='py-2 text-lg font-bold text-white '>{title}</h1>
                    <div className="pb-3">
                        <MovieCard posterPath={movies?.poster_path} id={movies?.id} />
                    </div>
                </Link>
            </div >

        </>
    )
}

export default MovieSuggestionsList;

