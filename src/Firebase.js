// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATbxEbCNeJYI2RK_kSDu5FWttnJhSFIEY",
  authDomain: "chat-app-2593f.firebaseapp.com",
  projectId: "chat-app-2593f",
  storageBucket: "chat-app-2593f.appspot.com",
  messagingSenderId: "216767229170",
  appId: "1:216767229170:web:104f72773bd0b4e4afb46b",
  measurementId: "G-TZ6E84C3VH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
