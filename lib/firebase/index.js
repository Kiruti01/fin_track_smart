// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC35S3Rm8SOuSaOMCoIgjwj6gnNS3Q9eEM",
  authDomain: "tracksmart-fbfe6.firebaseapp.com",
  projectId: "tracksmart-fbfe6",
  storageBucket: "tracksmart-fbfe6.appspot.com",
  messagingSenderId: "269661034556",
  appId: "1:269661034556:web:b92d8ce5415a715b9d4b39",
  measurementId: "G-XBRL0R2VCQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth, analytics };
