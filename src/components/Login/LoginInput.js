import Button from 'react-bootstrap/Button';
import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form'


const LogginTask = ({addUserPassword}) => {
    const [username, setUser] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
      e.preventDefault()
        if (!username || !password) {
            alert('need username and password')
            return
        }
        addUserPassword({username,password})
        setUser('')
        setPassword('')
    }

return (
  <form className='loggininput' onSubmit={onSubmit}>
    <div className='form-control'> 
    <label>username</label>
      <input 
      type='email' placeholder='email' required value={username}
       onChange ={(e) => setUser(e.target.value)} />
      </div>
      <div className='form-control'> 
    <label>password</label>
      <input 
      type='password' placeholder='password' required value={password}
       onChange ={(e) => setPassword(e.target.value)} />
      </div>
    <div className='form-control'> 
      <input className='btn btn-block'
      type='submit' value='loggin'/>

    </div>
  </form>
 
)
}
export default LogginTask