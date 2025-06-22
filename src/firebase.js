// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFPaAzb9xfelU8CbSQSV1FcnbL0lFgU7Q",
  authDomain: "react-2c2b9.firebaseapp.com",
  projectId: "react-2c2b9",
  storageBucket: "react-2c2b9.firebasestorage.app",
  messagingSenderId: "758624321761",
  appId: "1:758624321761:web:7c9a20d02726b55f77b7a0",
  measurementId: "G-07THWMRHW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app);