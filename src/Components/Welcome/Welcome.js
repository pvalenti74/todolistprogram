import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import Paul from '../../assets/Paul.png'

export default function Welcome() {
    const { currentUser } = useAuth()
    return (
        <Container className='welcomeCon'>
            <h1 className='justify-content-center mt-3 mb-3'>Welcome To My To-Do app</h1>
            <div className='row'>
                <div className='welcomeText col-md-7'>
                    <h3 className='text-center mt-1 HeaderText'>Meet The Developer</h3>
                    <p className='pText'>
                        Hello! my name is Paul Valenti, welcome to my program im thrilled you're here in my React To-Do app! Crafted using
                        <a href='https://reactjs.org/' target='_blank' rel='noreferrer' className='p-link'>
                            ReactJS 
                        </a>
                        , this program effortlessly connects to a well-organized database through an efficient backend built on
                        <a
                            href='https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-6.0'
                            target='_blank'
                            rel='noreferrer'
                            className='p-link'
                        >
                            ASP.NET API
                        </a>
                        . To elevate its capabilities, it leverages a trove of npm packages: routing magic by&nbsp;
                        <a href='https://reactrouter.com/en/main' target='_blank' rel='noreferrer' className='p-link'>
                            React Router Dom
                        </a>
                        , smooth API interactions managed with&nbsp;
                        <a href='https://axios-http.com/' target='_blank' rel='noreferrer' className='p-link'>
                            Axios
                        </a>
                        , fortified by the security prowess of&nbsp;
                        <a href='https://firebase.google.com/products/auth' target='_blank' rel='noreferrer' className='p-link'>
                            Google Firebase
                        </a>
                        . Infused with HTML and React Bootstrap. Checkout the full code on my Github. Thanks for dropping by. &nbsp;
                        <a href='https://github.com/pvalenti74/todolistprogram' target='_blank' rel='noreferrer' className='p-link'>
                            available on GitHub
                        </a>
                        .
                    </p>
                </div>
                <div className='WelcomeImg col-md-3'>
                    <img src={Paul} alt='Developer Portrait' />
                </div>
            </div>
        </Container>
    )
}