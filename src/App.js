import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import LogginTask from './components/Login/LoginInput';
import {BrowserRouter, BrowserRouter as Router,Route ,Link,Routes,} from 'react-router-dom'



function App () {
 


  return (
    
   
      <div className='container'>
        <Routes>
          <Route path='/' element={<LogginTask />}></Route>
          <Route path='/task' element={<Header/>}></Route>
        
        
           </Routes>
          
      {/* {(user.uName !== "") ? (
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
        )} */}
       
      </div>
   
  )
}

export default App;
