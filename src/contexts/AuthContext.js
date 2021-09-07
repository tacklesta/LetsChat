import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { auth } from "../firebase";

// creating a context
const AuthContext = React.createContext();

// creating a function to grab context
export const useAuth = ()=> useContext(AuthContext);


export const AuthProvider = ({ children }) =>{
    // setting the user and loading state
    const [loading, setLoading] = useState(true);
    const [user,setUser] = useState(null);
    const history = useHistory();

    // grabbing the user and loading state  from firebase authentication
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            setUser(user);
            setLoading(false);
            if(user) history.push('/chats');
        })
    },[user,history]);

    const value = { user };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
        )
}

