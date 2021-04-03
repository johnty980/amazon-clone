// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDn8OYOK3qN_vo6F3vcDaQoGmOzwJmk2hI",
    authDomain: "clone0321.firebaseapp.com",
    projectId: "clone0321",
    storageBucket: "clone0321.appspot.com",
    messagingSenderId: "979865318956",
    appId: "1:979865318956:web:6009ee790c2186ef71c389",
    measurementId: "G-WCCCT4PFHY"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };