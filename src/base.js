// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_V2vT2PiC_QJdPPm5SJEvOAFKuq6Gu5E",
    authDomain: "todolist-cd7ad.firebaseapp.com",
    projectId: "todolist-cd7ad",
    storageBucket: "todolist-cd7ad.appspot.com",
    messagingSenderId: "953496658939",
    appId: "1:953496658939:web:ee5fe7b98bb2d03df6a15e"
  };

  
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth} // we export auth so we can use it later. 