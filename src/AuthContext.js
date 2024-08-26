import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

// Create the context
const AuthContext = createContext();

// Provide the Auth context
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        // Clean up subscription
        return () => unsubscribe();
    }, []);

    const logout = () => {
        signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ currentUser, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the Auth context
export const useAuth = () => {
    return useContext(AuthContext);
};
