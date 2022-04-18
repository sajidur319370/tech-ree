// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr1QMTzeKKDAiNMjpWLFlSAWhX5KuQvzw",
  authDomain: "tech-ree.firebaseapp.com",
  projectId: "tech-ree",
  storageBucket: "tech-ree.appspot.com",
  messagingSenderId: "997298956336",
  appId: "1:997298956336:web:d4966a9487fca4aae7a5f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
