import React, {useContext, useEffect, useState, createContext} from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, getAuth, signOut} from 'firebase/auth'
import app from '../firebase.ts'
import { FirebaseAuth } from '../types/interfaces.ts'


export const AuthContext = createContext<FirebaseAuth>('')

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}: any) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


    console.log(currentUser)


    function login(email: string, password: string) {
       
       return signInWithEmailAndPassword(getAuth(app), email, password)

    }

    function logout() {

        return signOut(getAuth(app))

    }
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(getAuth(), (guy)=> {
            
            if (guy) {
            
            setCurrentUser(guy)
            setLoading(false)
            
            
            } else {
                setCurrentUser(guy)
                setLoading(false)
            }
    }) 
        

        return unsubscribe
    }, [])
   
    
    const value = {
        currentUser,
        login,
        logout
    }
    console.log(value)
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )



}
