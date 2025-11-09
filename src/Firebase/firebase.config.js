// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-m_68bt0FOsVg0NBkDGLbfTGasBi52b8",
  authDomain: "online-learning-platform-13955.firebaseapp.com",
  projectId: "online-learning-platform-13955",
  storageBucket: "online-learning-platform-13955.firebasestorage.app",
  messagingSenderId: "566993827523",
  appId: "1:566993827523:web:944d565a1eaffdfb035476"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);