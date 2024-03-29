import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './Auth.css' 

export default function Profile() {
    //UI
    //destruct
    const {currentUser} = useAuth()
  return (
    <span className="profile p-2">
        Hello {!currentUser.displayName ? currentUser.email : currentUser.displayName}
        <img src={currentUser.photoURL} alt={currentUser.email} />
    </span>
  )
}
