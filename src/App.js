import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App () {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        name: 'doctors app',
        date: 'jan 1th 2:30',
        reminder: true,
    },
    {
        id: 2,
        name: 'School app',
        date: 'jan 2th 4:30',
        reminder: true,
    },
    {
        id: 3,
        name: 'Gym app',
        date: 'jan 3th 1:30',
        reminder: false,
    }
])
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
     
      <Header onAdd = {() => setShowTask(!showTask)} 
        changeButton = {showTask}/>

      {showTask && <AddTask onAdd ={addTask} />}
      
      {tasks.length > 0 ? (
      <Tasks tasks={tasks}
        onToggle ={ToggleReminder}
       onDelete = {deleteTask} />) :( 'Task List is Empty'
       )}
       
    </div>
  )
}

export default App;
