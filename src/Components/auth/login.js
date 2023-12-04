import React from 'react'
import { Container, Card } from 'react-bootstrap'
//use-navigate is used to naviagte a user 
import { useNavigate } from 'react-router-dom'
//useAuth allows us access to currentUser, Login, or Logout.
//We must destructure these values from useAuth in the hook inside the component
import {useAuth} from '../../contexts/AuthContext'

//LOGIC
export default function Login() {
    //deconstructing
    const { login } = useAuth()
    const navigate = useNavigate()

    async function handleAuth() {
        await login()
        //once we login we are gonna return the user back home. 
        return navigate('/')
    }

    //UI
  return (
     <div className='login'>
        <article className="header mb-5 p-5 text-dark hText">
            <h1 className='header text-center'>Login</h1>
        </article>
        <Container>
            <Card className="m-2 border-dark text-center">
                <Card.Header className="bg-dark text-white">
                    <h2>Login for full functionality</h2>
                </Card.Header>
                <Card.Body>
                    {/* When the user clicks our button we want the user to fire off the handleAuth and trigger the callback */}
                    <button className="btn createBtn bg-dark" onClick={() => handleAuth()}>
                        Login w/ Github
                    </button>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}
