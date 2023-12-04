import React, { useState, useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
import { toDoSchema } from '../../utilities/validationSchema'
import axios from 'axios'
import { useAuth } from '../../contexts/AuthContext'

export default function ToDoForm(props) {
    //LOGIC
    //Destructing the todo props
    if (props.todo) {
        var { todoId, name, done, categoryId } = props.todo
    }
    const [categories, setCategories] = useState([])

    const {currentUser} = useAuth()

    useEffect(() => {
        axios.get(`https://localhost:7254/api/Categories`).then((response) => {
            console.log(response)
            setCategories(response.data)
        })
    }, [])

    const handleSubmit = (values) => {
        console.log(values)
        if (!props.todo) {
             
            const toDoToCreate = values
 
            axios.post(`https://localhost:7254/api/ToDoes`, toDoToCreate).then(() => {
                props.setShowCreate(false)
                props.getToDos()
            })
        } else {
            
            const toDoToEdit = {
                toDoId: props.todo.toDoId,
                name: values.name,
                done: values.done,
                categoryId: values.categoryId
            }
            //seconf er make the put request using axios
            axios.put(`https://localhost:7254/api/ToDoes/${props.todo.toDoId}`, toDoToEdit).then(() => {
                props.getToDos()
                props.setShowEdit(false)
            })
        }
    }

    return (
        //UI
        <Formik
        initialValues=
        {{
                //These act as else if's. prints prop or empty string
                name: props.todo ? props.todo.name : '',
                done: props.todo ? props.todo.done : false,
                categoryId: props.todo ? props.todo.categoryId : '',
            }}
            validationSchema={toDoSchema}
            onSubmit={(values) => handleSubmit(values)}>
            {({ errors, touched }) => (
                <Form id='todoForm'>
                    <div>
                        <Field name='name' placeholder='new to-do' classname='form-control' />
                        {errors.name && touched.name && <div className='text-danger'>{errors.name}</div>}
                    </div>
                    <div className="form-group m-3">
                    <Field name='categoryId' as='select' className='form-control'>
                        <option value='' disabled>[--Choose a Category--]</option>
                        {categories.map(cat =>
                            <option key={cat.categoryId} value={cat.categoryId}>
                                {cat.catName}
                            </option>    
                        )}
                        </Field>
                    </div>
                    {/* Submit Button */}
                    <div className='form-group m-3'>
                        <button type='submit' className='btn btn-success m-3'>
                            Add task
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
