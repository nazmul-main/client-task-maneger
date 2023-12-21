/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Config/Firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)




    // sign in user 
    const signinUser = (email, password) => {
        loading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Create user
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // sign out user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    
    // user observe 
    useEffect(() => {
        const unSubscribe =  onAuthStateChanged(auth, currrentUser => {
            setUser(currrentUser)
            console.log('current user:', currrentUser);
            setLoading(false);
        })
        return() => {
            return unSubscribe
        }
    }, []);

    const autInfo = {
        user,
        loading,
        createUser,
        signinUser,
        signOutUser,
    }


    return (
        <AuthContext.Provider value={autInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;