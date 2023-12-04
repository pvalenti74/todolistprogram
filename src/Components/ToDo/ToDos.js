import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import SingleToDo from './SingleToDo';
import FilterCat from './FilterCat';
import {useAuth} from '../../contexts/AuthContext'
import ToDoCreate from './ToDoCreate';
import './todo.css'


export default function ToDos() {
    //LOGIC
    const {currentUser} = useAuth()
    
    //Hook to store our todo data
    const [toDos, setToDos] = useState([]);
    
    //filter hook 
    const [filter, setFilter] = useState(0);

    const [showDone, setShowDone] = useState(false);

    //Set Hook for create UI 
    const [showCreate, setShowCreate] = useState(false);
    //0 is not listed within the index of todo's. so this will "show all"

    //Get 
    const getToDos = () => {
        axios.get(`https://localhost:7254/api/ToDoes`).then(response => {
            console.log(response)
            setToDos(response.data)
        })
    }

    //This will just run function to grab the ToDo's
    useEffect(() => {
        getToDos()
    }, []);
    
    //UI
  return (
    <section className="todo">
    <article className="header p-5">
        <h1 className="text-center hText">To-Do List</h1>
    </article>

    {/* admin only CREATE view */}
    {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
        <div className='bg-dark p-2 mb-3 text-center'>
            <button className=' btn'onClick={() => setShowCreate(!showCreate)}>
                {!showCreate ? 'Add a new task' : 'cancel'}
            </button>
            <div className='createContainer'>
                {showCreate &&
                    <ToDoCreate getToDos = {getToDos} setShowCreate = {setShowCreate}/>
                }
            </div>
        </div>
    }

    <FilterCat setFilter={setFilter} showDone={showDone} setShowDone={setShowDone} />
    <Container className='mt-3'>
        
        <article className=" row justify-content-center">
        {!showDone ?
              <>
               {filter === 0 ? toDos.filter(x => x.done === false).map(x =>
                <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos}/>
                ) :
                toDos.filter(x => x.done === false && x.categoryId === filter).map(x =>
                  <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos} />
              )}
            </> :
            <>
              {filter === 0 ? toDos.map(x =>
                  <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos}/>
                ) :
                toDos.filter(x => x.categoryId === filter).map(x =>
                  <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos} />
              )}
            </>
            }
            {/* If there are no results within the filtered tag */}
            {filter !== 0 &&  toDos.filter(t => t.categoryId === filter).length === 0 &&
                <h2 className='alert alert-warning text-dark'>
                    There are no results for this category
                </h2>
            }
        </article>
    </Container>

</section>
  )
}
