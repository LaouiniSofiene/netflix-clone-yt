// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjI0EHUiou1DG1nVKBmIE1DXZwWNEk7Xk",
    authDomain: "netflix-clone-yt-772ce.firebaseapp.com",
    projectId: "netflix-clone-yt-772ce",
    storageBucket: "netflix-clone-yt-772ce.appspot.com",
    messagingSenderId: "1090844830808",
    appId: "1:1090844830808:web:2629c61e8983d8167e6e2d"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }