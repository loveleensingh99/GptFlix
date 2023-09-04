// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1-ypRClqHW3pxTJMyBO9vDMLL6pqroZ0",
    authDomain: "netflixgpt-8e004.firebaseapp.com",
    projectId: "netflixgpt-8e004",
    storageBucket: "netflixgpt-8e004.appspot.com",
    messagingSenderId: "135678760132",
    appId: "1:135678760132:web:125649c891ac756165e591",
    measurementId: "G-WWFM4Y687M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);