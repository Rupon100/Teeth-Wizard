import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { Navigate } from "react-router-dom";

 
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)

    const handleRegister = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const handleLonin = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }
   
    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

   
    const signout = () => {
        return signOut(auth);
    }

    const contextValue = {
        handleRegister,
        handleLonin,
        googleLogin,
        signout,
        user,
        setUser
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
            }
            else{
                setUser(null)
            }
        });
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;