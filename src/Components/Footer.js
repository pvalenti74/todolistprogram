import React from 'react'
import Logout from './Auth/Logout'
import { useAuth } from '../contexts/AuthContext'

export default function Footer() {
    //destruct
    const { currentUser } = useAuth()

    //UI
    return (
        <>
        <div className='footBar'>
            {currentUser && <Logout />} 
            {/* ^ If the user is logged in offer the logout */}

            <footer className='text-center text-white p-4'>
                {/* Charcter Entity Refrences: &copy; */}
                <strong>&copy; {new Date().getFullYear()} Paul Valenti</strong>
            </footer>
        </div>
        </>
    )
}
