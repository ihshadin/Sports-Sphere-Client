import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const { user, setUser } = useState(null)

    const googleProvider = new GoogleAuthProvider();

    // Google Login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = {
        user,
        googleLogin,
        setUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;