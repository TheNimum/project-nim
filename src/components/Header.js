import React from "react";
import Button from "./Button";
import PropTypes from 'prop-types';
import Tasks from './Tasks';
import AddTask from './AddTask';
import Task from "./Task";
import { useState } from "react";

const Header = ({}) => {
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
    
    const[changeButton, setchangeButton] = useState(false)
    const [showTask, setShowTask] = useState(false)
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
      }
      const ToggleReminder = (id) => {
        setTasks(tasks.map((task)=> task.id === id 
        ? {...task, reminder: !task.reminder}: task)) 
      }
    const addTask = (task)=> {
        const id = Math.floor(Math.random() * 10000) +1 
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
      }
      const onAdd = (e) =>{
          setShowTask(!showTask)
          setchangeButton(!changeButton)
      }
return(
    <div>
    <header className="header" >
        <h1 style={headingSyle}>
            </h1>
            <Button color={changeButton ? 'red' : 'green'} text={changeButton ? 'close' : 'Add'} 
            onClick = {onAdd}
            onAdd ={() => setShowTask(!showTask)} 
            changeButton = {showTask}
            />
    </header>
   { showTask && <AddTask onAdd={addTask}/>}
    {Task.length > 0 ? (
       <Tasks tasks={tasks}
          onToggle ={ToggleReminder}
        onDelete = {deleteTask} />) :( 'List is Empty'
        )}

</div>
) 
} 
Header.defaultProps = {
    title: 'Puppy '
}
const headingSyle = {
    color: 'blue',
    
}
Header.prototype = {
    title: PropTypes.string
}
export default Header