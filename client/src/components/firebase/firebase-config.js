import { initializeApp }               from "firebase/app";
import { getAuth , EmailAuthProvider } from 'firebase/auth'
import { getDatabase }                 from 'firebase/database'
import   Database                      from "./Database"

const firebaseConfig = {
  apiKey: "AIzaSyA5ZVpdDSlAEyapUY3dBI36TIsNWd7jGZA",
  authDomain: "freewebdatabase.firebaseapp.com",
  projectId: "freewebdatabase",
  storageBucket: "freewebdatabase.appspot.com",
  messagingSenderId: "175455526730",
  appId: "1:175455526730:web:cf958acd630aa8fa6e2bb3",
  measurementId: "G-2KNQ2QB29G"
};

export const firebase_app                 = initializeApp(firebaseConfig);
export const firebase_auth                = getAuth(firebase_app);
export const firebase_db                  = getDatabase(firebase_app);
export const firebase_auth_email_provider = new EmailAuthProvider()

