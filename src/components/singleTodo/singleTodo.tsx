import React, { useState } from 'react'
import { Todo } from '../../module'
import { AiFillEdit, AiFillDelete} from 'react-icons/ai';
import { MdDone} from 'react-icons/md';
import './singleTodo.css';
type Props = {
  todo:Todo
  todos:Todo[]
	setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}



const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {

  const [edit,setEdit] = useState<Boolean>(false)
  const [editTodo,setEditTodo] = useState<Todo>(todo)

  const handleEdit = (id:number) => {
   setEdit(true);

  }

  const handleDone = (id:number) =>{
    setTodos(todos.map((todo)=>todo.id === id 
    ? {...todo,isDone: !todo.isDone}
    : todo
    ))
  }

  const handleDelete = (id:number) => {
    setTodos(todos.filter((todo)=>todo.id !== id));
  }

  return (
    <form className='todos__single'>
      {todo.isDone 
      ? (<s className='todos__single--text'>
      {todo.todo}
  </s>)
      :(<span className='todos__single--text'>
      {todo.todo}
  </span>)}
      
      <div>
        <span 
        className='icon'
        onClick={()=>handleEdit(todo.id)}>
          <AiFillEdit/>
        </span>
        <span 
        className='icon'
        onClick={()=>handleDelete(todo.id)}>
          <AiFillDelete/>
        </span>
        <span 
        className='icon'
        onClick={() => handleDone(todo.id)}
        >
          <MdDone/>
        </span>
      </div>

    </form>
  )
}

export default SingleTodo