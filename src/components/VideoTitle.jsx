import React from 'react'

const VideoTitle = ({ original_title, overview }) => {
    return (
        <>
            <div className="absolute w-[99%] px-28 aspect-video pt-[20%] bg-gradient-to-r from-black">
                <h2 className='text-6xl font-bold text-white'>{original_title}</h2>
                <p className='w-1/3 py-6 text-lg text-white' >{overview}</p>
                <div className="flex gap-2">
                    <button className='w-32 px-3 py-2 text-lg text-black bg-white rounded-md hover:bg-opacity-80 bg-opacity-90'>▶Play</button>
                    <button className='w-32 px-3 py-2 text-lg text-white bg-opacity-50 rounded-md bg-gray-50'>ℹ More Info</button>
                </div>
            </div>
        </>
    )
}


export default VideoTitle