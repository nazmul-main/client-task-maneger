/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Config/Firebase/firebase.config";
const googleprovider = new GoogleAuthProvider();


export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // google signin
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleprovider);
    }


    // sign in user 
    const signinUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // sign out user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }


    // update profile  
    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    // user observe 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currrentUser => {
            setUser(currrentUser)
            console.log('current user:', currrentUser);
            setLoading(false);
        })
        return () => {
            return unSubscribe
        }
    }, []);

    const autInfo = {
        googleLogin,
        user,
        createUser,
        signinUser,
        signOutUser,
        updateUserProfile,
        loading,
    }


    return (
        <AuthContext.Provider value={autInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;