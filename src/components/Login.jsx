import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <>
            <div className="">
                <Header />
                <div className="relative flex items-center justify-center">
                    <img src="./assets/homebg.jpg" alt="homebg" className='top-0 left-0 -z-10' />
                    <div className="absolute w-[450px] ">
                        {isSignInForm &&
                            <form className='flex flex-col p-12 bg-black rounded-md bg-opacity-80'>
                                <h1 className='p-2 text-2xl font-bold text-white'>Sign In</h1>
                                <input type="text" placeholder='Email Address' className='p-2 m-2 placeholder-gray-700 bg-gray-300' />
                                <input type="password" placeholder='Password' className='p-2 m-2 placeholder-gray-700 bg-gray-300' />
                                <button className='p-4 mx-2 my-4 text-white bg-red-600 rounded-md '>Sign In</button>
                                <p className='w-auto py-4 mx-2 text-white cursor-pointer group' onClick={toggleSignInForm}>New to Netflix? <span className='group-hover:underline'> Sign Up Now</span></p>

                            </form>}


                        {!isSignInForm &&
                            <form className='flex flex-col p-12 bg-black rounded-md bg-opacity-80'>
                                <h1 className='p-2 text-2xl font-bold text-white'>Sign Up</h1>
                                <input type="text" placeholder='Email Address' className='p-2 m-2 placeholder-gray-700 bg-gray-300' />
                                <input type="password" placeholder='Password' className='p-2 m-2 placeholder-gray-700 bg-gray-300' />
                                <input type="password" placeholder='Confirm Password' className='p-2 m-2 placeholder-gray-700 bg-gray-300' />
                                <button className='p-4 mx-2 my-4 text-white bg-red-600 rounded-md '>Sign In</button>
                                <p className='w-auto py-4 mx-2 text-white cursor-pointer group' onClick={toggleSignInForm}>Already Registered? <span className='group-hover:underline'> Login In Now</span></p>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login