import React from 'react'
import { Todo } from '../model';
import SingleTodo from '../SingleTodo/SingleTodo';
import "./TodoList.css";

interface Props{
todos:Todo[];
setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoList:React.FC<Props> = ({todos,setTodos}:Props) => {
  return (
    <div className='todos'>

        {todos.map(todo=>(
           <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))

        }
    </div>
  )
}

export default TodoList