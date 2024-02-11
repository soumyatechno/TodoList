import React from 'react';
import './todolist.css';
import { Todo } from '../../module';
import SingleTodo from '../singleTodo/singleTodo';
interface Props {
	todos:Todo[]
	setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const Todolist: React.FC<Props> = ({todos,setTodos}) => {
	return <div className="todos">
		{todos.map(todo=>(
		<SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
	))}</div>;
};

export default Todolist;
