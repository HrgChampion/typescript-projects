import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model';
import {AiFillDelete, AiFillEdit} from "react-icons/ai"
import {MdDone} from "react-icons/md"
import "./SingleTodo.css";
import { Draggable } from 'react-beautiful-dnd';
type Props = {
index:number;
todo:Todo;
todos:Todo[],
setTodos:React.Dispatch<React.SetStateAction<Todo[]>>,

}
const SingleTodo = ({index,todo,setTodos,todos}:Props) => {
    const [edit,setEdit]=useState<boolean>(false);
    const [text,setText]=useState<string>(todo.todo);

    const handleDone=(id:number)=>{
        setTodos(todos.map((todo)=>
        todo.id ===id? {...todo,isDone:!todo.isDone}:todo
        ))
    }
    const handleDelete=(id:number)=>{
        setTodos(todos.filter((todo)=>todo.id!==id));
    }
    const handleEdit=(e:React.FormEvent,id:number)=>{
        e.preventDefault();
        setTodos(todos.map((todo)=>
        todo.id ===id? {...todo,todo:text}:todo
        ))
        setEdit(false);
    }
    const inputRef=useRef<HTMLInputElement>(null);
    useEffect(()=>{
        inputRef.current?.focus();
    },[edit])
  return (
      <Draggable draggableId={todo.id.toString()} index={index}>
          {
                (provided)=>(
                    <div>
        <form className='todos_single' onSubmit={(e)=>handleEdit(e,todo.id)} 
        {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>

            {edit?(
                <input ref={inputRef} value={text} onChange={(e)=>  setText(e.target.value)} className="todos_single_text"/>
            ):
            
            todo.isDone?(
                <s className='todos_single_text'>
                {todo.todo}
            
            </s>
            ):(
                <span className='todos_single_text'>
            {todo.todo}
        
        </span>
            
            )}

        <div>
            <span className='icon' onClick={()=>{
                if(!edit&&!todo.isDone){
                    setEdit(!edit);
                }}
            }>
                <AiFillEdit />
            </span>
            <span className='icon'>
                <AiFillDelete onClick={()=>handleDelete(todo.id)}/>
            </span>
            <span className='icon' onClick={()=>handleDone(todo.id)}>
                <MdDone/>
            </span>
        </div>
        </form>
    </div>
                )
          }
    
        </Draggable>
  )
}

export default SingleTodo