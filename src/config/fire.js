// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDw9zkAi5LzNNUyvPZ386nQIfUwr7dO_OA",
    authDomain: "gamehub-27e3c.firebaseapp.com",
    projectId: "gamehub-27e3c",
    storageBucket: "gamehub-27e3c.appspot.com",
    messagingSenderId: "861941992876",
    appId: "1:861941992876:web:9a67e0fc88739f0b04fe09"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
export default fire;