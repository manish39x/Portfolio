// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5KYEHZJpChmv3WF-0gUOToSlCyeJClh8",
  authDomain: "portfolio-6d74c.firebaseapp.com",
  projectId: "portfolio-6d74c",
  storageBucket: "portfolio-6d74c.appspot.com",
  messagingSenderId: "173993513466",
  appId: "1:173993513466:web:e5f59ed4e6bc8490a41443",
  measurementId: "G-1PMJ1MW0R2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
