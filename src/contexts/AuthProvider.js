import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [ user, setUser ] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userInfo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    const googleProvider = new GoogleAuthProvider()

    const googleLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('user Razan')
            setUser(currentUser)
            setLoading(false)
        });

        return () => unSubscribe()

    } ,[])

    const authInfo = {
        createUser,
        logIn,
        user,
        logOut,
        updateUser,
        loading,
        googleLogIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;