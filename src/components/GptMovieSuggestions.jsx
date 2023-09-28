import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'
import MovieSuggestionsList from './MovieSuggestionsList'

const GptMovieSuggestions = () => {


  const movieNames = useSelector((store) => store.gpt.movieNames)
  console.log("🚀 ~ file: GptMovieSuggestions.jsx:9 ~ GptMovieSuggestions ~ movieNames:", movieNames)
  const moviesResults = useSelector((store) => store.gpt.moviesResults)
  console.log("🚀 ~ file: GptMovieSuggestions.jsx:11 ~ GptMovieSuggestions ~ moviesResults:", moviesResults)


  console.log("🚀 ~ file: GptMovieSuggestions.jsx:7 ~ GptMovieSuggestions ~ movieNames:", movieNames)
  if (!movieNames) return null;

  return (
    <>
      <div className="p-4 m-4 bg-black opacity-90">


        <div className="flex flex-col ">
          <div className="flex overflow-x-scroll custom-scrollbar">
            {moviesResults && movieNames && movieNames.map((movieName, index) => (
              <MovieSuggestionsList title={movieName} movies={moviesResults[index]} key={movieName} />
            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default GptMovieSuggestions