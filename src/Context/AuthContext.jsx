import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, setCurrentUser);
    }, [currentUser])

    return (
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    )
}