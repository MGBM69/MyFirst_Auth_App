// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCntqCR2GvCJEfKgMpmzwNjPH2getiHRG8",
  authDomain: "authapp-new.firebaseapp.com",
  projectId: "authapp-new",
  storageBucket: "authapp-new.firebasestorage.app",
  messagingSenderId: "683290760856",
  appId: "1:683290760856:web:d1d2ba55721c16c7af62ed",
  measurementId: "G-WSSW4LV5SF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);