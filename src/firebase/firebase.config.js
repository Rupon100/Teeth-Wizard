// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtL7TqOMuFE1P-H_tISYnOEa1RqDJL6y4",
  authDomain: "simple-firebase3-830c9.firebaseapp.com",
  projectId: "simple-firebase3-830c9",
  storageBucket: "simple-firebase3-830c9.firebasestorage.app",
  messagingSenderId: "508641162298",
  appId: "1:508641162298:web:381212451f90c28ab2b103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 
export default auth;