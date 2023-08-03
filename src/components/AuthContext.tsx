import React, {useContext, useEffect, useState, createContext} from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, getAuth, signOut} from 'firebase/auth'
import app from '../firebase.ts'
import { Navigate } from 'react-router-dom'
const AuthContext = createContext('')

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props: {children: any}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const {children}  = props


    function login(email: string, password: string) {
       
       return signInWithEmailAndPassword(getAuth(app), email, password)

    }

    function logout() {

        return signOut(getAuth(app))

    }
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(getAuth(app), (user)=> {
            
            if (user) {
            setLoading(false)
            setCurrentUser(user)
            console.log(user)
            } else {
                console.log('no user')
            }
    }) 

        return unsubscribe
    }, [])
   
    
    const value = {
        currentUser,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )



}
