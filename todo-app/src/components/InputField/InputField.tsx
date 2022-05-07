
import React from 'react'
import "./InputField.css"
interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>

}

const InputField:React.FC<Props> = ({todo,setTodo}:Props) => {
  return (
    <div>
        <form className='input'>

            <input type="input" value={todo} placeholder='Enter Task Todo' className='input_box' 
            onChange={(e)=>setTodo(e.target.value)}/>
           
            <button className='input_submit' type='submit'>Add</button>
        </form>
        </div>
  )
}

export default InputField