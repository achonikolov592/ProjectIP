// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-Dm5y-ZiQ-61S2yRh-VbbrKPJXzRh1Kk",
  authDomain: "ofriniohouses.firebaseapp.com",
  projectId: "ofriniohouses",
  storageBucket: "ofriniohouses.appspot.com",
  messagingSenderId: "395205095094",
  appId: "1:395205095094:web:dd47cbe8e09b73051e0017",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
