
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAqQA8TOBVDfBtXBbiaJUF_Ck1HuYccUBE",
    authDomain: "amshop-45ab3.firebaseapp.com",
    projectId: "amshop-45ab3",
    storageBucket: "amshop-45ab3.appspot.com",
    messagingSenderId: "770996932180",
    appId: "1:770996932180:web:b2b6dde93d7fe8242027c1",
    measurementId: "G-6QQBFV73TN"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };