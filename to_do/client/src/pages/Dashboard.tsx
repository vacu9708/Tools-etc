import React from "react";
import Navbar from "../navigation_bar/Navbar";
import TodoForm from "../components/todo/TodoForm";
import axios from "axios";
import TodoList, { Todo } from "../components/todo/TodoList";

const Dashboard = () => {
  const [todoList, setTodoList] = React.useState<Todo[]>([]);
  
  React.useEffect(() => {
    axios.get('/todos', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        if (res.status === 200)
          setTodoList(res.data.todos);
        })
  }, [])

  return(
    <div>
      <Navbar /> {/*The bar that has the logout button*/}
      <div className="max-w-md mx-auto pt-12">
        <h1 className="font-bold text-green-400 text-center text-xl mb-12">To-do list</h1>
        <TodoForm todos={todoList} setTodos={setTodoList}/>
        <TodoList todos={todoList} setTodos={setTodoList} />
      </div>
    </div>
  )
}

export default Dashboard;