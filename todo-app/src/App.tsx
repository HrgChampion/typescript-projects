import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import InputField from './components/InputField/InputField'
import { Todo } from './components/model'




const App:React.FC=()=>{ //React.FC is a function component
  const [todo,setTodo]=useState<string>('')
const [todos,setTodos]=useState<Todo[]>([])

const handleAdd=(e:React.FormEvent)=>{
  e.preventDefault()
  if(todo){
    setTodos([...todos,{
      id:Date.now(),
      todo,
      isDone:false
    }])
    setTodo("")
  }
}
  return (
    <div className="App">
     <span className='heading'>Todo-App</span>
     <InputField  todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
     {todos.map((t)=>(
       <li>{t.todo}</li>
     ))}
    </div>
  )
}

export default App
