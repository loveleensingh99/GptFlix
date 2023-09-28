import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const MovieSuggestionsList = ({ title, movies }) => {
    console.log("🚀 ~ file: movieList.jsx:5 ~ MovieList ~ movies:", movies)


    return (
        <>


            <div className="flex flex-col justify-between gap-3 px-5" >
                <h1 className='py-2 text-lg font-bold text-white '>{title}</h1>
                <div className="pb-3">
                    <MovieCard posterPath={movies?.poster_path} key={movies?.id} />
                </div>
            </div>



        </>
    )
}

export default MovieSuggestionsList;

