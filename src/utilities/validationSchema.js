//This file will acts as the backbone for authenticating our crud functions. 
//create two functions, a category schema and a to-do schema 

import * as Yup from 'yup'

//schema for categories
const catSchema = Yup.object().shape({
    catName : Yup.string().max(25, 'nobody 25 chars or older allowed in').required('we need a name!'),
    catDescription: Yup.string().max(100, 'over 100 is way too many!')
})

//schema for to-dos
const toDoSchema = Yup.object().shape({
        //we don't add ToDo ID as that is predetermined
        name : Yup.string().max(20, 'Too many characters!').required('we need a name!'),
        done : Yup.bool().required(),
        categoryId : Yup.number()
})

export {catSchema, toDoSchema}