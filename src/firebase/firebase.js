
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD9nxwVb9zH1LZ17V4FM0MnwR0dxqwshSk",
  authDomain: "it-clubbukhara-projects.firebaseapp.com",
  projectId: "it-clubbukhara-projects",
  storageBucket: "it-clubbukhara-projects.appspot.com",
  messagingSenderId: "351085861557",
  appId: "1:351085861557:web:31d98f35dc025bc6813cfc"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);