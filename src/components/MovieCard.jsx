import React from 'react'
import { IMG_CDN } from '../utils/constants'
import { Link } from 'react-router-dom'

const MovieCard = ({ posterPath, key, id }) => {
    console.log("🚀 ~ file: MovieCard.jsx:6 ~ MovieCard ~ id:", id)
    return (
  

        <Link to={`https://www.themoviedb.org/movie/${id}`} target="_blank">
            <div className="w-32 md:w-48">
                <img src={`${IMG_CDN}${posterPath} `} alt="Movie Card" />
            </div>
        </Link>

    )
}

export default MovieCard