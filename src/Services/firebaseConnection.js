// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCp6XVqo6KUFiuIGNFgypUe-yZwKKlcVdk",
    authDomain: "listlinks2.firebaseapp.com",
    projectId: "listlinks2",
    storageBucket: "listlinks2.appspot.com",
    messagingSenderId: "407380505771",
    appId: "1:407380505771:web:6f7244c346da51f7bf73ee",
    measurementId: "G-5Q7GJBWS0D"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
