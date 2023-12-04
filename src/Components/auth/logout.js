import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'


//Logic
export default function Logout() {
    //deconstructing
    const { logout } = useAuth()
    const navigate = useNavigate()

    //function
    function handleAuth() {
        // Logs the user out then redirects them to the home screen
        logout()
        navigate('/')
    }

    //UI
  return (
    <div className='logout text-center p-3 bg-dark text-white'>
    <Profile/>
    <button className="btn createBtn" onClick={handleAuth}>
        Logout
    </button>
</div>
  )
}
