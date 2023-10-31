// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGv4DaH35Jk4PNvbi9GwR-V4Fqs0zXajU",
  authDomain: "mui-dashboard-20125.firebaseapp.com",
  projectId: "mui-dashboard-20125",
  storageBucket: "mui-dashboard-20125.appspot.com",
  messagingSenderId: "623854215134",
  appId: "1:623854215134:web:cc2d17d811da086065c74f",
  measurementId: "G-Q1JJY8MFLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);