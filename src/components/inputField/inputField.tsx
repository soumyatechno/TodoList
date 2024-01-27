import React,{ useRef } from 'react'
import './inputField.css';
import { Props } from '../../module';
const InputField:React.FC<Props> = ({todo,setTodo,handleSubmit}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form 
    className="input" 
    onSubmit={
      (e)=>
      {handleSubmit(e)
      inputRef.current?.blur()
    }
    }>
      <input 
      ref={inputRef}
      type="input" 
      placeholder='Enter your quest' 
      className="input_field"
      value={todo} 
      onChange={(e)=> setTodo(e.target.value)} 
      />
      <button type="submit" className='input_submit'>GO</button>
    </form>
  )
}

export default InputField