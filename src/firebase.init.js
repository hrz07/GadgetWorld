// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apikey,
  // apiKey: "AIzaSyAUsJ-nBKMFOZ_S5NKlTErbx-WeFTqWFgQ",
  authDomain: process.env.REACT_APP_domain,
  // authDomain: "phone-mela.firebaseapp.com",
  projectId: process.env.REACT_APP_projectId,
  // projectId: "phone-mela",
  storageBucket: process.env.REACT_APP_bucket,
  // storageBucket: "phone-mela.appspot.com",
  messagingSenderId: process.env.REACT_APP_msgsenderid,
  // messagingSenderId: "129500587669",
  appId: process.env.REAT_APP_appid
  // appId: "1:129500587669:web:44519eaa1b7c238c709d9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;