// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXV-2wWVMXlnWSFpXxZpbCbkMNwZpDY9A",
  authDomain: "finance-management-7a897.firebaseapp.com",
  projectId: "finance-management-7a897",
  storageBucket: "finance-management-7a897.firebasestorage.app",
  messagingSenderId: "75680137766",
  appId: "1:75680137766:web:30ac579c37183840ea1ce7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
