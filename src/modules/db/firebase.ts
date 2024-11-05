// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJLKH2hwYEEKFjdaL9FNvBhgthaHfZfPw",
  authDomain: "green-assembly.firebaseapp.com",
  projectId: "green-assembly",
  storageBucket: "green-assembly.appspot.com",
  messagingSenderId: "423001327832",
  appId: "1:423001327832:web:fe31339b3fa11e91512fad",
  measurementId: "G-SXPB9P8P80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a non-default Storage bucket

export const storage = getStorage(app);

export const db: any = getFirestore(app);
