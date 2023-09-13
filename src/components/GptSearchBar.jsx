import React from 'react'
import { ImgBg } from '../utils/constants'

const GptSearchBar = () => {
    return (
        <>
            <div className="absolute -z-10">
                <img src={ImgBg} alt="homebg" className='top-0 left-0 -z-10' />
            </div>

            <div className=" pt-[15%] flex justify-center z-50">
                <form className='grid items-center w-1/2 grid-cols-12 gap-3 m-6 bg-black rounded-xl'>
                    <input type="text" className='col-span-9 p-4 my-4 ml-3 rounded-lg' placeholder='What would to watch today?' ></input>
                    <button className='col-span-3 px-4 py-4 mr-3 text-white bg-red-700 rounded-lg'>Search</button>
                </form>
            </div>

        </>
    )
}

export default GptSearchBar