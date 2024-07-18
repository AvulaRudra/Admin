import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import getFirestore

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4qjcP40hgzx-gWKqVB6c9h9OKpecZobw",
    authDomain: "lms-1-36b1f.firebaseapp.com",
    projectId: "lms-1-36b1f",
    storageBucket: "lms-1-36b1f.appspot.com",
    messagingSenderId: "568729903010",
    appId: "1:568729903010:web:5e85a998503b1054f9dcfb",
    measurementId: "G-Z5844EFCH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app); // Export db
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA6hi5WniSmIBsPCwcqk_QVizh8yHcYM88",
//   authDomain: "ravuru-ccbcd.firebaseapp.com",
//   projectId: "ravuru-ccbcd",
//   storageBucket: "ravuru-ccbcd.appspot.com",
//   messagingSenderId: "438776822141",
//   appId: "1:438776822141:web:31b8db8d2b789959003414",
//   measurementId: "G-9TDRW616T8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
