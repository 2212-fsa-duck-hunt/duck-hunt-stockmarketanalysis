import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxbRx4XOlMVG54WJd6e_4wEiokkvDBNwA",
  authDomain: "duck-hunt-e1cbd.firebaseapp.com",
  projectId: "duck-hunt-e1cbd",
  storageBucket: "duck-hunt-e1cbd.appspot.com",
  messagingSenderId: "843955394220",
  appId: "1:843955394220:web:d4a8b1c85b9acf6259b109",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
