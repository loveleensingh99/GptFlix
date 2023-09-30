import React from 'react'
import { Link } from 'react-router-dom'

const VideoTitle = ({ original_title, overview, trailerVideo, tmdbId }) => {
    console.log("🚀 ~ file: VideoTitle.jsx:4 ~ VideoTitle ~ trailerVideo:", trailerVideo)
    return (
        <>
            <div className="absolute w-[99%] px-28 aspect-video pt-[30%] md:pt-[20%] bg-gradient-to-r from-black">
                <h2 className='text-3xl font-bold text-white md:text-4xl lg:text-6xl'>{original_title}</h2>
                <p className='hidden py-6 text-lg text-white md:w-1/3 xl:block' >{overview}</p>
                <div className="flex gap-2 pt-2">
                    <Link to={`https://www.youtube.com/watch?v=${trailerVideo?.key}`} target="_black" className='w-32 px-3 py-2 text-lg text-center text-black bg-white rounded-md hover:bg-opacity-80 bg-opacity-90'> ▶Play</Link>
                    <Link to={`https://www.themoviedb.org/movie/${tmdbId}`} target="_blank" className='w-32 px-3 py-2 text-lg text-center text-white bg-opacity-50 rounded-md bg-gray-50'>ℹ More Info</Link>
                </div>
            </div>
        </>
    )
}


export default VideoTitle