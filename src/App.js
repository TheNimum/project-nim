import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import LogginTask from './components/Login/LoginInput';


function App () {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        name: 'doctors app',
        age: 'jan 1th 2:30',
        reminder: true,
    },
    {
        id: 2,
        name: 'School app',
        age: 'jan 2th 4:30',
        reminder: true,
    },
    {
        id: 3,
        name: 'Gym app',
        age: 'jan 3th 1:30',
        reminder: false,
    }
])
const [data , setData] = useState([
  {
    email: 'x@xx.com',
    password: '123'
  }
])
const [user, setUser] = useState({uName: '', pass:''})
const [usrError, setError] = useState("")
const login = (userinfo) => {
  console.log(userinfo)
  const database = data.find((e) => e.email === userinfo.email)
  
  if(userinfo.email === database.email && userinfo.password === database.password ){
    console.log("success")
    setUser({
      uname:'',
      pass:'',
    })}


}
const logOut = () => {
  setUser({
    uName: "",
    pass: ""
  });
}


const [showTask, setShowTask] = useState(false)
const addTask = (task)=> {
  const id = Math.floor(Math.random() * 10000) +1 
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
  
}
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
const ToggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id 
  ? {...task, reminder: !task.reminder}: task)) 
}
  return (
    <div className='container'>
     {(user.uName !== "") ? (
     ( <div className='welcome'>
       <h2>welcome <span>{user.uName }</span></h2>
       <button className='btn btn-block' onClick={logOut}>logout</button></div>)
     ): <LogginTask login ={login} usrError={usrError}/>}

      <Header onAdd = {() => setShowTask(!showTask)} 
        changeButton = {showTask}/>

      {showTask && <AddTask onAdd ={addTask} />}
      
      {tasks.length > 0 ? (
      <Tasks tasks={tasks}
        onToggle ={ToggleReminder}
       onDelete = {deleteTask} />) :( 'List is Empty'
       )}
       
    </div>
  )
}

export default App;
