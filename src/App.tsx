import React,{useState} from 'react';
import './App.css';
import InputField from './components/inputField/inputField';
import { Todo } from './module';
import TodoList from './components/todoList/todolist';

const App:React.FC = ()  => {
  const [todo,setTodo] = useState<string>("");
  const [todos,setTodos] = useState<Todo[]>([]);


  const handleSubmit = (e:React.FormEvent) => {
     e.preventDefault();
     if(todo){
      setTodos([...todos,{id:Date.now(), todo,isDone:false}]);
      setTodo("");
     }
  }

  console.log(todos);
  
  return (
    <div className="App">
    <span className="heading"> QuestRunner </span>
    <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit}/>
    {/* TodoList */}
    <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
