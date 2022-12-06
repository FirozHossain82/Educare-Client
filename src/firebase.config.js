// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/firebase-auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8nJLPvDLlwRPPdu_D0tUXTund-5nLsec",
  authDomain: "web-care-learning-platform.firebaseapp.com",
  projectId: "web-care-learning-platform",
  storageBucket: "web-care-learning-platform.appspot.com",
  messagingSenderId: "752306531006",
  appId: "1:752306531006:web:7826279e0002dae7d14cef"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)

export default app;