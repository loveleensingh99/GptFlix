import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

export default function Body() {
  




    return (
        <>
            <Login />
            <Browse />
        </>
    )
}
