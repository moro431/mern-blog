// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-931ea.firebaseapp.com",
  projectId: "mern-blog-931ea",
  storageBucket: "mern-blog-931ea.firebasestorage.app",
  messagingSenderId: "8321309207",
  appId: "1:8321309207:web:cd40953a3bf757191e1a52"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);