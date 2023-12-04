//This component will use formik to create logic and a UI for our user
import React from 'react'
import { Formik, Form, Field } from 'formik'
import { catSchema } from '../../utilities/validationSchema'
import axios from 'axios'

export default function CatForm(props) {
    //LOGIC
    const handleSubmit = (values) => {
        console.log(values)
        if (!props.category) {
            //If the prop check fails then we enter CREATE mode
            const catToCreate = values
            //send the object with axios
            axios.post('https://localhost:7182/api/Categories', catToCreate).then(() => {
                //We close the create form and call a get axios call to refresh our category table
                props.setShowCreate(false)
                props.getCategories() // calls the function to reset categories
            })
        } else {
            //If there are props then we enter EDIT mode
            const catToEdit = {
                categoryId: props.category.categoryId,
                catName: values.catName,
                catDesc: values.catDesc,
            }
            axios.put(`https://localhost:7182/api/Categories/${props.category.categoryId}`, catToEdit).then(() => {
                props.setShowEdit(false)
                props.getCategories()
            })
        }
    }

    //UI
    return (
        <div className='createCategory m-2 text-white text-center'>
            <Formik
                validationSchema={catSchema}
                initialValues={
                    //Below is a ternary operator that makes our form behave differently based on whether we have a prop called category. (ie Editing a category)
                    {
                        // '?' means chaining
                        catName: props.category ? props.category.catName : '',
                        catDesc: props.category ? props.category.catDesc : '',
                    }
                }
                onSubmit={(values) => handleSubmit(values)}
            >
                {/* destructing */}
                {({ errors, touched }) => (
                    <Form id='catForm' className='row text-center m-auto'>
                        <div className='form-group m-1 p-1'>
                            <Field name='catName' className='form-control' placeholder='Name' />
                            {/* Below is the conditionally rendered error message */}
                            {errors.catName && touched.catName && <div className='text-danger'>{errors.catName}</div>}
                        </div>
                        <div className='form-group m-1 p-1'>
                            <Field name='catDesc' className='form-control' placeholder='Description' />
                            {/* Below is the conditionally rendered error message */}
                            {errors.catDesc && touched.catDesc && (
                                <div className='text-danger'>{errors.catDesc}</div>
                            )}
                        </div>
                        <div className='form-group m-1 p-1'>
                            <button type='sumbit' className='btn btn-success m-1'>
                                Submit category to API
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}