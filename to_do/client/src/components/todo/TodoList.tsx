import axios from "axios";
import React from "react";
import './TodoList.css'
import { Checkbox } from "@material-ui/core";

export interface Todo {
  _id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}
const TodoList = ({todos, setTodos}: TodoListProps) => {
  const [state, setState] = React.useState(false);

  const markCompleted = (todo: Todo) => {
    axios.patch(`/todo/${todo._id}`, {isCompleted: !todo.isCompleted}, {headers: { token: localStorage.getItem('token')}})
      .then(res => {
        if (res.status === 200){
          todo.isCompleted=!todo.isCompleted
          console.log(res.data.title)
          setState(!state)
        }
      });
  }

  function delete_todo(todo: Todo){
    axios.delete("/todo/"+todo._id, {headers: { token: localStorage.getItem('token')}})
      .then(res=>{
        if(res.status===200){
          setTodos(todos.filter((prev_todo)=>prev_todo._id!==todo._id))
          console.log(res.data.title)
        }
    })
  }

  return(
    <>
      {todos.map((todo) => (
        <div className="flex border border-gray-400 p-4 rounded-md mb-4 justify-between items-center" key={todo._id}>
          <Checkbox checked={todo.isCompleted} onClick={() => markCompleted(todo)}></Checkbox>
          <label className={todo.isCompleted? 'line_through': 'todo_title'}>
            {todo.title}
          </label>
          <input type="button" className="py-2 px-3 bg-green-400 text-white rounded-md cursor-pointer" value="DONE" 
          onClick={() => delete_todo(todo)} />
        </div>
      ))}
    </>
  )
}

export default TodoList;