import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHyQDlrFo6x7w7KmO_NTIewaJkqxpLGEk",
  authDomain: "project-c1240.firebaseapp.com",
  projectId: "project-c1240",
  storageBucket: "project-c1240.appspot.com",
  messagingSenderId: "252793541029",
  appId: "1:252793541029:web:d1c793c1a3ad211fc3984c",
  measurementId: "G-2DT0QX9ZMG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
