import React,{useState} from 'react';
import './App.css';
import InputField from './components/inputField/inputField';
import { Todo } from './module';

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
    {todos.map(element=> <li key={element.id}>{element.todo}</li>)}
    </div>
  );
}

export default App;
