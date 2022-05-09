import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../model';
import SingleTodo from '../SingleTodo/SingleTodo';
import "./TodoList.css";

interface Props{
todos:Todo[];
setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
completed:Todo[];
setCompleted:React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoList:React.FC<Props> = ({todos,setTodos,completed,setCompleted}:Props) => {
  return (
    <div className="container">
      <Droppable droppableId='Listing'>
        {
          (provided)=>(
            <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
            <span className='todos__heading'>
            Active Tasks
            </span>
            {todos.map((todo,index)=>( 
                <SingleTodo index={index} todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/>
                
                ))}
            {provided.placeholder}
              </div>
          )
        }
    
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {
          (provided)=>(
            <div className="todos remove"ref={provided.innerRef} {...provided.droppableProps}>
            <span className='todos__heading'>
          Completed Tasks
          </span>
          {completed.map((todo,index)=>( 
              <SingleTodo index={index} todo={todo} todos={todos} setTodos={setCompleted} key={todo.id}/>
              ))}
          {provided.placeholder}
            </div>
          )
        }
     
      </Droppable>
    </div>
  )
}

export default TodoList