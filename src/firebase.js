import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "API KEY",
  authDomain: "letschat-34eb6.firebaseapp.com",
  projectId: "letschat-34eb6",
  storageBucket: "letschat-34ab6.appspot.com",
  messagingSenderId: "106305743178396",
  appId: "1:10630851343496:web:6f274d85fc10744534e9d9"
}).auth();
