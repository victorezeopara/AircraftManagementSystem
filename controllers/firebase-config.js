import firebase from "firebase/compat/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7qh8iNrJp-PPTdqSrwKkOIgX5oaFXNPs",
  authDomain: "asms-8e15b.firebaseapp.com",
  projectId: "asms-8e15b",
  storageBucket: "asms-8e15b.appspot.com",
  messagingSenderId: "305458338649",
  appId: "1:305458338649:web:3453ed5b376f8b7b940a48",
  measurementId: "G-D24BPZ305E",
};

const app = firebase.initializeApp(firebaseConfig);

export { app };
