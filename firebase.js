// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiBKmdQtZSKbMOlaRNBrWdCcstXs4XGY0",
  authDomain: "dropship-store-16f41.firebaseapp.com",
  projectId: "dropship-store-16f41",
  storageBucket: "dropship-store-16f41.firebasestorage.app",
  messagingSenderId: "925356783415",
  appId: "1:925356783415:web:11a7d4315282b44c5b4cb2",
  measurementId: "G-48563G7G20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
