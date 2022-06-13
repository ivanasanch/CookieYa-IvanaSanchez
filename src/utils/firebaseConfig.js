
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {

  apiKey: "AIzaSyDkAQ7cxWvbBDJOpuUEzCKJvGMrSw4aI7M",

  authDomain: "cookieya-b76dc.firebaseapp.com",

  projectId: "cookieya-b76dc",

  storageBucket: "cookieya-b76dc.appspot.com",

  messagingSenderId: "107849423705",

  appId: "1:107849423705:web:66197755bb01e673c7ca48"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const dp = getFirestore(app)
export default db