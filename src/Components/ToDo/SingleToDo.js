import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import ToDoEdit from './ToDoEdit'


export default function SingleToDo(props) {
    //deconstruct
    const { name, done, toDoId } = props.todo

    const [showEdit, setShowEdit] = useState(false)
    const { currentUser } = useAuth()

    const deleteToDo = (id) => {
        if (window.confirm(`Are you sure? You're about to delete: ${name}`)) {
            axios.delete(`https://localhost:7182/api/ToDos/${id}`).then(() => {
                props.getToDos()
            })
        }
    }

    const flipDone = () => {
        let updatedToDo = {
            toDoId: props.todo.toDoId,
            name: props.todo.name,
            done: !props.todo.done,
            categoryId: props.todo.categoryId,
        }
        //Used to update the card after checking the box
        axios.put(`https://localhost:7182/api/ToDos/${props.todo.toDoId}`, updatedToDo).then((response) => {
            props.getToDos()
        })
    }

    return (
        <Card style={{ width: '24rem' }} className='todoCard'>
            <Card.Body>
                <Card.Title>
                    <h3>
                        {name} :{done === true && <span className='text-success'>Completed!</span>}
                        {done !== true && <span className='text-danger'>Not-Completed</span>}
                    </h3>
                </Card.Title>
                <Card.Text>
                    {/* EDIT / DELETE actions for admin only */}
                    {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL && (
                        <>
                            <button onClick={() => setShowEdit(true)} id='editLink' className='admin-btn'>
                                <FaEdit /> Edit
                            </button>
                            <br />
                            <button onClick={() => deleteToDo(toDoId)} id='deleteLink' className='admin-btn'>
                                <FaTrashAlt /> Delete
                            </button>
                            {showEdit && (
                                <ToDoEdit todo={props.todo} showEdit={showEdit} setShowEdit={setShowEdit} getToDos={props.getToDos} />
                            )}
                        </>
                    )}
                </Card.Text>
                <input className='checkbox' type='checkbox' checked={props.todo.done} onChange={() => flipDone()}/>
            </Card.Body>
        </Card>
    )
}
