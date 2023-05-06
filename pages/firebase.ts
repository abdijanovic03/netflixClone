// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0cyf4O5sy0pn2SAqHhyNc5FRG3oSBXzw",
  authDomain: "netflix-clone-yt-94c2a.firebaseapp.com",
  projectId: "netflix-clone-yt-94c2a",
  storageBucket: "netflix-clone-yt-94c2a.appspot.com",
  messagingSenderId: "878998889685",
  appId: "1:878998889685:web:ad3180eef817ed70f5ae5c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }