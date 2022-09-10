import React from 'react'
import './App.css';
import { AiFillCloseCircle } from "react-icons/ai";
const TodoLists = ({item,id,deleteItems}) => {
   
    return (
    <div className='todo_style'>
        <AiFillCloseCircle className='fa-times' onClick={()=>deleteItems(id)}/>
    <li>{item}</li>
    </div>)
}

export default TodoLists