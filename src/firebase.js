import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "API KEY",
  authDomain: "letschat-34eb6.firebaseapp.com",
  projectId: "letschat-34eb6",
  storageBucket: "letschat-34ab6.appspot.com",
  messagingSenderId: "136357463178396",
  appId: "1:10630851343406:web:6f274d85fc10741534e9d9"
}).auth();
