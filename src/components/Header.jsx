import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { BiSearchAlt2 } from 'react-icons/bi';

export default function Header() {

  const navigate = useNavigate();
  const user = useSelector(store => store.user)


  const dispatch = useDispatch();
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("🚀 ~ file: Body.jsx:15 ~ onAuthStateChanged ~ user:", user)
        //signin case
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse");
      } else {
        dispatch(removeUser())
        navigate("/");
      }
    });


    //unsubscribe will be called when component unmounts.
    return () => unsubscribe();
  }, [])




  const handleSignOut = () => {
    signOut(auth).then(() => {

    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  const handleGptSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView())

  }

  return (
    <>
      <div className="absolute flex flex-col justify-between w-full px-8 py-3 bg-gradient-to-b from-black md:flex-row ">
        <Link to="/browse" className='z-20'> <img src="./assets/gptflix.png" alt="GptFlix" className="py-2 mx-auto w-44 md:mx-0" /></Link>
        {user &&
          <div className="z-10 flex items-center gap-3 mx-auto md:mx-0">
            <button className='flex items-center justify-center gap-3 p-2 px-2 mx-2 my-4 text-white bg-gray-800 rounded-md bg-opacity-80 ' onClick={handleGptSearchClick}>GPT Search  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg></button>
            <img src="./assets/user.png" alt="logo" className="h-12 bg-white rounded-full" />
            <p className='text-xl text-white'>{user?.displayName}</p>
            <button className='p-2 mx-2 my-4 text-white bg-red-600 rounded-md ' onClick={handleSignOut}>Logout</button>
          </div>
        }
      </div >
    </>
  )
}
