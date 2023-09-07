import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {

  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {

    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  return (
    <>
      <div className="absolute flex justify-between w-full px-8 py-3 bg-gradient-to-b from-black">

        <img src="./assets/netflix.png" alt="Netflix" className="w-60" />


        {user &&
          <div className="flex items-center gap-3">

            <img src={user?.photoURL} alt="logo" className="h-12 rounded-full" />
            <p className='text-xl text-white'>{user?.displayName}</p>
            <button className='p-2 mx-2 my-4 text-white bg-red-600 rounded-md ' onClick={handleSignOut}>Logout</button>
          </div>
        }

      </div>

    </>
  )
}
