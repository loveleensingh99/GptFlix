import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Browse from "./components/Browse";
import Login from "./components/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("🚀 ~ file: Body.jsx:15 ~ onAuthStateChanged ~ user:", user)
        //signin case
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
      } else {
        dispatch(removeUser())
      }
    });
  }, [])
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
