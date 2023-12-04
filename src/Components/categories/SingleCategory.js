import React, {useState} from 'react'
//Before importing below we install react-icons
import {FaEdit, FaTrashAlt} from 'react-icons/fa'
import { useAuth } from '../../contexts/AuthContext'
import CatEdit from './CatEdit';
import axios from 'axios';


export default function SingleCategory(props) {
  //deconstructing props from the category props
  const {catName, catDesc, categoryId} = props.category

  const [showEdit, setShowEdit] = useState(false);

  const {currentUser} = useAuth()

  const deleteCat = (id) => {
    if(window.confirm(`Are you sure? You're about to delete ${catName}?`)){
      // Call the axios delete command then call on categories to refresh
      axios.delete(`https://localhost:7254/api/Categories/${id}`).then(() => {
        props.getCategories()
      })
    }
  }
  return (
    <tr>
      <td>{catName}</td>
      <td>{catDesc}</td>
      {/* This is the ADMIN only EDIT/DELETE UI */}
      {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
        <td>
          <button onClick={() => setShowEdit(true)} className="m-1 rounded">
             <FaEdit/> Edit
          </button>

          <button onClick={() => deleteCat(categoryId)} className="m-1 rounded">
             <FaTrashAlt/> Delete
          </button>
          {/* We render the Edit depending on conditon */}
          {showEdit &&
            <CatEdit
              setShowEdit={setShowEdit}
              showEdit={showEdit}
              getCategories={props.getCategories}
              category={props.category}/>
          }
        </td>
      }
    </tr>
  )
}
