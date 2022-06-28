// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf_fmmPdYF8zYBlcOfe8ooUROX9mqJAsQ",
  authDomain: "nec-store.firebaseapp.com",
  projectId: "nec-store",
  storageBucket: "nec-store.appspot.com",
  messagingSenderId: "826781935595",
  appId: "1:826781935595:web:a58986a9ecdc82744edbae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
