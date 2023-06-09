// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2R4w-5JXMB3oQvODV19vSfx5Rh--dBY0",
    authDomain: "sports-sphere.firebaseapp.com",
    projectId: "sports-sphere",
    storageBucket: "sports-sphere.appspot.com",
    messagingSenderId: "624224052533",
    appId: "1:624224052533:web:7b6248311e10ac9a15d87c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;