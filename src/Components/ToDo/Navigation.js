import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import '../App.css'
import { HiHome} from 'react-icons/hi'
import Welcome from './Welcome'

export default function Navigation() {
    //deconstuct
    const {currentUser} = useAuth()
    return (
    <Navbar className='navClass'>
     
     {/* <button className='homeBTN' onClick={<Welcome/>}> <HiHome/> </button> */}
     <a href='/' className='navLink'>
        <span class="brand-text">TO-DO APP</span>
     </a>
        {/* Hamburger */}
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
            <Nav>
              {/* inside the nav we will hold tags for log-in functionality */}

              {/* If the user IS logged in */}
              <Link to='/' className='nav-link'>Welcome</Link> 
              {currentUser &&
              <>   {/* anony tag */}
                <Link to='/todo' className='nav-link'>To-Do</Link> 
                <Link to='/Categories' className='nav-link'>Categories</Link>
              </>
              }

                {/* If user is NOT logged in  */}
              {!currentUser &&
                <Link to='/login' className='nav-link'>Login</Link>
              }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}