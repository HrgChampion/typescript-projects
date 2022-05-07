
import React, { useRef } from 'react'
import "./InputField.css"
interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void;

}

const InputField:React.FC<Props> = ({todo,setTodo,handleAdd}:Props) => {
    const inputRef=useRef<HTMLInputElement>(null);
  return (
    <div>
        <form className='input' onSubmit={(e)=>{handleAdd(e)
    inputRef.current?.blur()    
    }}
        
        >

            <input type="input"ref={inputRef} value={todo} placeholder='Enter Task Todo' className='input_box' 
            onChange={(e)=>setTodo(e.target.value)}/>
           
            <button className='input_submit' type='submit'>Add</button>
        </form>
        </div>
  )
}

export default InputField