import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  /*
  apiKey: "AIzaSyDhdQ0PGgIItJkWu8LaEtUtbLP6JZNzClQ",
  authDomain: "feos-90bb3.firebaseapp.com",
  projectId: "feos-90bb3",
  storageBucket: "feos-90bb3.appspot.com",
  messagingSenderId: "243531445588",
  appId: "1:243531445588:web:94e7412fb00744e6b504c1",
*/

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const bd = getFirestore();
//export default app;
