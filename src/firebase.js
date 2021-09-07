import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDNKJkJXt4JUSiRJnNvKila3Ht6hOC45po",
  authDomain: "unichat-34ab6.firebaseapp.com",
  projectId: "unichat-34ab6",
  storageBucket: "unichat-34ab6.appspot.com",
  messagingSenderId: "1063085178396",
  appId: "1:1063085178396:web:6f274d85fc10716074e9d9"
}).auth();
