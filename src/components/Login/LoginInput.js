
import React from 'react';
import { useState } from 'react';



const LogginTask = ({login, usrError}) => {
    //const [username, setUser] = useState('')
    //const [password, setPassword] = useState('')
    const[userinfo, setUserinfo] = useState({email: '', password: ''})

    const onSubmit = (e) => {
      e.preventDefault()
       
      login(userinfo)
      

    }

return (
  <form className='loggininput' onSubmit={onSubmit}>
    <div className='form-control'> 
    <label>username</label>
      <input 
      type='email' placeholder='email' id='email' required value={userinfo.username}
      onChange ={(e) => setUserinfo({...userinfo, email: e.target.value})} />
      </div>
      <div className='form-control'> 
    <label>password</label>
      <input 
      type='password' placeholder='password' id='password' required value={userinfo.password}
       onChange ={(e) => setUserinfo({...userinfo, password: e.target.value})} />
      </div>
    <div className='form-control'> 
      <input className='btn btn-block'
      type='submit' value='loggin'/>

    </div>
  </form>
 
)
}
export default LogginTask