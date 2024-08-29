// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA8xTK5iGyJ5z50Vp8ab19UT3U2X62DE4",
  authDomain: "myecom-5719e.firebaseapp.com",
  projectId: "myecom-5719e",
  storageBucket: "myecom-5719e.appspot.com",
  messagingSenderId: "1065909539363",
  appId: "1:1065909539363:web:cf13911ad1850cf89a5796"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }