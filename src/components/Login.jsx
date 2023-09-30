import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import { checkLoginValidData, checkSignUpValid, checkValidData } from '../utils/validate';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const dispatch = useDispatch()
    //Login
    const emailLogin = useRef();
    const passwordLogin = useRef();

    //Signup
    const emailSignup = useRef();
    const passwordSignup = useRef();
    const confirmPasswordSignup = useRef();
    const nameSignup = useRef();

    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        const message = checkLoginValidData(emailLogin.current.value, passwordLogin.current.value)
        console.log("🚀 ~ file: Login.jsx:20 ~ handleSignIn ~ message:", message)
        toast.error(message)
        if (!message) {
            signInWithEmailAndPassword(auth, emailLogin.current.value, passwordLogin.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    toast.success(`Login Successful! `)


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(errorCode + "-" + errorMessage)

                });
        }
    }
    const handleSignUp = (e) => {
        e.preventDefault()
        const message = checkSignUpValid(nameSignup.current.value, emailSignup.current.value, passwordSignup.current.value, confirmPasswordSignup.current.value)
        console.log("🚀 ~ file: Login.jsx:20 ~ handleSignIn ~ message:", message)
        toast.error(message)
        if (!message) {

            //Create a new User in firebase
            createUserWithEmailAndPassword(auth, emailSignup.current.value, passwordSignup.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: nameSignup.current.value, photoURL: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;

                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))

                    }).catch((error) => {
                        // An error occurred
                        toast.error(`Some problem occured! ${error}`)

                    });

                    console.log("🚀 ~ file: Login.jsx:54 ~ .then ~ user:", user)

                    toast.success("Signup Successful! ")

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(errorCode + "-" + errorMessage)
                });
        }
    }
    return (
        <>
            <div className="">
                <Header />
                <div className="relative flex items-center justify-center">
                    <img src="./assets/homebg.jpg" alt="homebg" className='top-0 left-0 object-cover w-full h-screen -z-10 md:h-auto' />
                    <div className="absolute md:w-[450px] w-full px-4 md:px-0">
                        <ToastContainer
                            position='top-right'
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme='light'
                        />
                        {isSignInForm &&
                            <form className='flex flex-col p-12 bg-black rounded-md bg-opacity-80'>
                                <h1 className='p-2 text-2xl font-bold text-white'>Sign In</h1>
                                <input ref={emailLogin} type="text" placeholder='Email Address' className='p-2 m-2 placeholder-gray-700 bg-gray-300' />
                                <input ref={passwordLogin} type="password" placeholder='Password' className='p-2 m-2 placeholder-gray-700 bg-gray-300' />
                                <button className='p-4 mx-2 my-4 text-white bg-red-600 rounded-md ' onClick={handleSignIn}>Sign In</button>
                                <p className='w-auto py-4 mx-2 text-white cursor-pointer group' onClick={toggleSignInForm}>New to GptFlix? <span className='group-hover:underline'> Sign Up Now</span></p>
                            </form>}
                        {!isSignInForm &&
                            <form className='flex flex-col p-12 bg-black rounded-md bg-opacity-80'>
                                <h1 className='p-2 text-2xl font-bold text-white'>Sign Up</h1>
                                <input ref={nameSignup} type="text" placeholder='Name' className='p-2 m-2 placeholder-gray-700 bg-gray-300' />
                                <input ref={emailSignup} type="text" placeholder='Email Address' className='p-2 m-2 placeholder-gray-700 bg-gray-300' />
                                <input ref={passwordSignup} type="password" placeholder='Password' className='p-2 m-2 placeholder-gray-700 bg-gray-300' />
                                <input ref={confirmPasswordSignup} type="password" placeholder='Confirm Password' className='p-2 m-2 placeholder-gray-700 bg-gray-300' />
                                <button className='p-4 mx-2 my-4 text-white bg-red-600 rounded-md ' onClick={handleSignUp}>Sign Up</button>
                                <p className='w-auto py-4 mx-2 text-white cursor-pointer group' onClick={toggleSignInForm}>Already Registered? <span className='group-hover:underline'> Login In Now</span></p>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;