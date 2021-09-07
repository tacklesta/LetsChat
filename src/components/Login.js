import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import "firebase/app";
import letschat from "./letschat.jfif";

import { auth } from "../firebase";

import firebase from "firebase/app";

const Login = ()=>{

    return(
        <div id="login-page">
            <div id="login-card">
                <img src={letschat} ></img>
                <h2>Welcome to LetsChat !!</h2>
                <div
                class="login-button google"
                onClick={()=>  auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign In with Google
                </div>

                <br/><br/>

                <div
                class="login-button facebook"
                onClick={()=>  auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}

                >
                    <FacebookOutlined /> Sign In with Facebook
                </div>
            </div>
        </div>
        
        );
}

export default Login;