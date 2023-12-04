import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import SingleCategory from './SingleCategory'
import { useAuth } from '../../contexts/AuthContext'
import CatCreate from './CatCreate'
import './category.css'

export default function Categories() {
    //LOGIC
    //hook to store categories
    const [categories, setCategories] = useState([])

    const { currentUser } = useAuth()

    //This react hook will track the state of the whether the create form is showing or hidden
    // we intially display false because we wanna make sure the user is logged in first.
    const [showCreate, setShowCreate] = useState(false)

    const getCategories = () => {
        axios.get('https://localhost:7254/api/Categories').then((response) => {
            console.log(response)
            setCategories(response.data)
        })
    }

    //use effect to get categories
    useEffect(() => {
        getCategories()
    }, [])

    //UI
    return (
        <section className='categories'>
            <article className='header p-5'>
                <h1 className='text-center hText'>Categories</h1>
            </article>

            {/* Admin CRUD functions, add check for admin */}
            {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL && (
                <div className='bg-dark p-2 mb-3 text-center'>
                    {showCreate ? (
                        <>
                            {/* Set the usestate to false to disable the display */}
                            <button onClick={() => setShowCreate(false)} className='btn btn-warning'>
                                Cancel
                            </button>
                            {/* we call the function props so they can be called in the external component */}
                            <CatCreate getCategories={getCategories} setShowCreate={setShowCreate} />
                        </>
                    ) : (
                        // set show state as true by triggering
                        <button onClick={() => setShowCreate(true)} className='btn createBtn'>
                            Create Category
                        </button>
                    )}
                </div>
            )}

            <Container className='p-2'>
                <table className='table my-3'>
                    <thead className='table-secondary text-uppercase'>
                        <tr>
                            {' '}
                            {/*Table Row*/}
                            <th className='catTable'>Name</th>
                            <th className='catTable'>Description</th>
                            {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL && <th>Actions</th>}
                        </tr>
                    </thead>
                    <tbody className='catBody'>
                        {/* READ UI */}
                        {categories.map((c) => (
                            <SingleCategory key={c.categoryId} category={c} getCategories={getCategories} />
                        ))}
                    </tbody>
                </table>
            </Container>
        </section>
    )
}
