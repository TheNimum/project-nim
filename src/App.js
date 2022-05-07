import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App () {
  const [task, setTasks] = useState([
    {
        id: 1,
        text: 'doctors app',
        day: 'jan 1th 2:30',
        reminder: true,
    },
    {
        id: 2,
        text: 'School app',
        day: 'jan 2th 4:30',
        reminder: true,
    },
    {
        id: 3,
        text: 'Gym app',
        day: 'jan 3th 1:30',
        reminder: false,
    }
])
const deleteTask = (id) => {
  setTasks(task.filter((task) => task.id !== id))
}
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={task} onDelete = {deleteTask}/>
    </div>
  )
}

export default App;
