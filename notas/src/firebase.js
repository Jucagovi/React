import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCCBYbRHnmRb7L_JhGvTzJtymxPkDux9d8",
  authDomain: "notas-d349c.firebaseapp.com",
  databaseURL:
    "https://notas-d349c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "notas-d349c",
  storageBucket: "notas-d349c.appspot.com",
  messagingSenderId: "77689617990",
  appId: "1:77689617990:web:8906d20bd877ccd88b5447",
};

const basedatos = firebase.initializeApp(firebaseConfig);

export default basedatos.database().ref();
