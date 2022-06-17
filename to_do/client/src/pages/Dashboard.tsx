import React from "react";
import Navbar from "../navigation_bar/Navbar";
import TodoForm from "../components/todo/TodoForm";
import axios from "axios";
import TodoList, { Todo } from "../components/todo/TodoList";

const Dashboard = () => {
  const [todoList, setTodoList] = React.useState<Todo[]>([]);
  const [profileImg, setProfileImg] = React.useState("");
  
  React.useEffect(() => {
    axios.get('/todos', { headers: { token: localStorage.getItem('token')}}) // Get to-do list
      .then(res => {
        if (res.status === 200)
          setTodoList(res.data.todos);
        })

    axios.get('/user', {headers: {token: localStorage.getItem('token')}}) // Get profile image
    .then(res => {
      if (res.status === 200){
        setProfileImg("/uploads/images/"+res.data.profileImg)
      }
  })
  }, [])

  return(
    <>
      <Navbar/>
      <p className='text-green-400' style={{marginTop:'20px', marginLeft:'100px', fontWeight:'bolder' , fontSize:'30px'}}>Profile</p>
      <div className='text-green-400' style={{marginLeft:'5px', marginTop:'10px', border:'5px solid', width:'300px', height:'420px'}}>
        <img src={profileImg} width='300' height='200' alt="..."></img>
      </div>
      <div className="max-w-md mx-auto pt-12" style={{position: 'relative', bottom:'500px'}}>
        <h1 className="font-bold text-green-400 text-center text-xl mb-12">To-do list</h1>
        <TodoForm todos={todoList} setTodos={setTodoList}/>
        <TodoList todos={todoList} setTodos={setTodoList} />
      </div>
    </>
  )
}

export default Dashboard;