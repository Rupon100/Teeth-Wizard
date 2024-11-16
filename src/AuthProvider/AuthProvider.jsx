import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect } from "react";
import auth from "../firebase/firebase.config";

 
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

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
        signout
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUset) => {

        });
        return () => unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;