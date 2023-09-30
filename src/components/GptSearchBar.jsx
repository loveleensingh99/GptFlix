import React, { useEffect, useRef, useState } from 'react'
import { ApiOptions, ImgBg } from '../utils/constants'
import openai from '../utils/openai';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addSearchBarResults } from '../utils/gptSlice';



const GptSearchBar = () => {
    const dispatch = useDispatch();

    const searchText = useRef(null);
    const [loading, setLoading] = useState(false); // Add loading state



    const handleGptSearchClick = async () => {
        setLoading(true);


        console.log(searchText.current.value);

        //Make an Api call to gpt ai and get movie results

        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query " + searchText.current.value + ". only give me names of 8 movies, comma seprated like the example result given ahead. Example Result: Gadar,Dhoom. Sholay, Don, Koi mil gaya";
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        if (!gptResults.choices) {
            console.log('Error occured.');
        } else {
            const gptMoviesArr = gptResults.choices?.[0].message?.content.split(",")

            const promisesArray = gptMoviesArr.map((movie) => searchMovieTmdb(movie))

            const tmdbResults = await Promise.all(promisesArray);
            console.log("🚀 ~ file: GptSearchBar.jsx:31 ~ handleGptSearchClick ~ tmdbResults:", tmdbResults)

            const tmdbResultsMoviesArr = tmdbResults.map((movie) => {
                return movie.results[0]
            })

            console.log("🚀 ~ file: GptSearchBar.jsx:36 ~ tmdbResultsMoviesArr ~ tmdbResultsMoviesArr:", tmdbResultsMoviesArr)

            if (gptMoviesArr && tmdbResults) {
                dispatch(addSearchBarResults({ tmdbResultsMoviesArr, gptMoviesArr }));
            }
            setLoading(false);
        }
    }

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                handleGptSearchClick()
            }
        }
        searchText.current.addEventListener('keypress', handleKeyPress);

        // Cleanup the event listener when the component unmounts


    }, [])


    //search movie in tmdb 
    const searchMovieTmdb = async (movieName) => {

        const data = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, ApiOptions)
        return data.data;
    }




    return (
        <>
            <div className="absolute -z-10">
                <img src={ImgBg} alt="homebg" className='fixed top-0 left-0 object-cover h-screen md:object-none xl:h-auto -z-10' />
            </div>
            <div className="pt-[50%] md:pt-[10%] flex justify-center z-50">
                <form className='grid items-center w-full grid-cols-12 gap-3 m-2 bg-black rounded-md md:m-6 md:w-1/2 md:rounded-xl' onSubmit={(e) => e.preventDefault()}>
                    <input ref={searchText} type="text" className='col-span-9 p-2 my-4 ml-3 rounded-sm md:rounded-lg md:p-4' placeholder='Your favourite movie, actor, or type of movie' ></input>
                    <button className='col-span-3 p-2 mr-3 text-white bg-red-700 rounded-sm md:rounded-lg md:px-4 md:py-4' onClick={handleGptSearchClick}>Search</button>
                </form> {loading && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <img src="./assets/loading.gif" alt="Loading..." />
                    </div>
                )}
            </div>
        </>
    )
}

export default GptSearchBar