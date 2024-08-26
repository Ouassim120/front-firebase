// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyC5SAx631lIYp0EwOQUcWYcX2mDjT5r8HM",

    authDomain: "fir-5097f.firebaseapp.com",

    projectId: "fir-5097f",

    storageBucket: "fir-5097f.appspot.com",

    messagingSenderId: "264722689506",

    appId: "1:264722689506:web:1e8357b00db18e05bd1dbb",

    measurementId: "G-JLGK28BK2N"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
