// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXweKS9xiQJHYEnARCtn76hyAvQxzMrsY",
  authDomain: "job-box-f8f75.firebaseapp.com",
  projectId: "job-box-f8f75",
  storageBucket: "job-box-f8f75.appspot.com",
  messagingSenderId: "137679459433",
  appId: "1:137679459433:web:849c8b10d57906a4fd3ef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;