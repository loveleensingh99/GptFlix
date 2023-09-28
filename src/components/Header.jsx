import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { toast } from 'react-toastify';

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
      <div className="absolute flex justify-between w-full px-8 py-3 bg-gradient-to-b from-black">
        <img src="./assets/netflix.png" alt="Netflix" className="z-10 w-60" />
        {user &&
          <div className="z-10 flex items-center gap-3">
            <button className='p-2 mx-2 my-4 text-white bg-purple-800 rounded-md' onClick={handleGptSearchClick}>GPT Search</button>
            <img src={user?.photoURL} alt="logo" className="h-12 rounded-full" />
            <p className='text-xl text-white'>{user?.displayName}</p>
            <button className='p-2 mx-2 my-4 text-white bg-red-600 rounded-md ' onClick={handleSignOut}>Logout</button>
          </div>
        }
      </div >
    </>
  )
}
