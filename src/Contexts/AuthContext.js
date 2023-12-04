//basic react imports + hooks
import React, {useState,useEffect,useContext} from 'react'
//we create auth from firebase using ./base
import {auth} from '../base'
//Our three base authentication functions
import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'


//I'm creating a context object to store my auth data
const AuthContext = React.createContext()

//Below we create a FUNCTION that will allow us to use the context in components. 
//We will import this function anytime we want the currentUser, login, or logout functionality
export function useAuth(){
  return useContext(AuthContext)
}

//I'm going to create a function to allow me to use my auth tools 
//The children tag allows us to use other components for certain functions
//LOGIC
export default function AuthProvider({children}) {

    //HOOKS
    //Stores the currentUser of our app 
    const [currentUser, setCurrentUser] = useState();
    //This will determine if the user has logged in and set the laoding to dalse and then dsipaly the relevant children from AuthProvider
    const [loading, setloading] = useState(true);

    //Login Logic
    const githubAuthProvider = new GithubAuthProvider()

    //The actual login function using the logic above
    async function login() {
        //signInWithPopUp asks for the params of: authorizer & provider
        return (signInWithPopup(auth,githubAuthProvider).then(authData => {
            console.log(authData)
            setCurrentUser(authData.user)
        }))
    }

    async function logout() {
        //the null will erase the current user data to result in a "logout"
        signOut(auth).then(setCurrentUser(null))
    }

    //This const will hold the values for: currentUser, Login, And Logout.
    // We can pass these to the child components. 
    const value = { currentUser, login, logout}

    //Here we will configure the offchanges
    useEffect(() => {
      const authChange = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setloading(false)
      })
    
      return authChange

    }, [])
    


  //UI  
  return (
  
    <AuthContext.Provider value={value}>
        { !loading && children}
    </AuthContext.Provider>
  )
}
