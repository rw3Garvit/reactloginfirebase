// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2aJwCY5nMv5fmWiT8tKZkn876wAnH4KI",
  authDomain: "react-9-bd5ec.firebaseapp.com",
  projectId: "react-9-bd5ec",
  storageBucket: "react-9-bd5ec.appspot.com",
  messagingSenderId: "101629019760",
  appId: "1:101629019760:web:84a4972f6e75e4b90056b5",
  measurementId: "G-746Y185G8S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage };
