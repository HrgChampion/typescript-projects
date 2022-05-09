import React, { useState } from 'react'

import './App.css'
import InputField from './components/InputField/InputField'
import { Todo } from './components/model'
import TodoList from './components/TodoList/TodoList'
import {DragDropContext, DropResult} from 'react-beautiful-dnd'



const App:React.FC=()=>{ //React.FC is a function component
  const [todo,setTodo]=useState<string>('')
const [todos,setTodos]=useState<Todo[]>([])
const [completed,setCompleted]=useState<Todo[]>([])

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
const onDragEnd=(result:DropResult)=>{
const {destination,source,draggableId}=result
if(!destination)return;
if(destination.droppableId===source.droppableId&&destination.index===source.index) return;
let add,active=todos,complete=completed;

if(source.droppableId==='Listing'){
  add=active[source.index]
  active.splice(source.index,1);
}else{
  add=complete[source.index]
  complete.splice(source.index,1);
}

  if(destination.droppableId==='Listing'){
    active.splice(destination.index,0,add)
   
  }else{
    complete.splice(destination.index,0,add)
   
  }
  setTodos(active)
  setCompleted(complete)
}
  return (
   <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
     <span className='heading'>Todo-App</span>
     <InputField  todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
     <TodoList todos={todos} setTodos={setTodos} completed={completed} setCompleted={setCompleted}/>
    
    </div>
    </DragDropContext>
  )
}

export default App
