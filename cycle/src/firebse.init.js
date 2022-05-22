// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2KqHJqCAgz0mTrPvbsz_a9fRkFtGIh98",
  authDomain: "cycle-41db3.firebaseapp.com",
  projectId: "cycle-41db3",
  storageBucket: "cycle-41db3.appspot.com",
  messagingSenderId: "339036454640",
  appId: "1:339036454640:web:3a6a509891278bd36d0c35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;