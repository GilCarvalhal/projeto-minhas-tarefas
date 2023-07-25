import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA5brI7t8dm-XvKdvzvGKxK4_tgKKnXVhY",
    authDomain: "curso-f2d62.firebaseapp.com",
    projectId: "curso-f2d62",
    storageBucket: "curso-f2d62.appspot.com",
    messagingSenderId: "780475130513",
    appId: "1:780475130513:web:481be44e0d5b65c2015530",
    measurementId: "G-PQHZCMP6DK"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };