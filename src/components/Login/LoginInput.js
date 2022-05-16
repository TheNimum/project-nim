
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const LogginTask = () => {
   const navigate = useNavigate()
    const[userinfo, setUserinfo] = useState({email: '', password: ''})
    const [user, setUser] = useState({uName: '', pass:''})
    const [usrError, setError] = useState("")
    const [data , setData] = useState([
          {
            email: 'x@xx.com',
            password: '123'
          }])
    const onSubmit = (e) => {
      e.preventDefault()
       
      login(userinfo)
    }
    
    
    const login = (userinfo) => {
      console.log(userinfo)
      const database = data.find((e) => e.email === userinfo.email)
      
      if(userinfo.email === database.email && userinfo.password === database.password ){
        console.log("success", user)
        setUser({
          uname: userinfo.email,
          pass: userinfo.password,
        });
       navigate('task')
      }
        console.log(user)
    
    }
    const logOut = () => {
      setUser({
        uName: "",
        pass: ""
      });
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
   {(user.uName == "") ? ( <div className='form-control'> 
      <input className='btn btn-block'
      type='submit' value='loggin'/>
    </div>): <button className='btn btn-block' onClick={logOut}>logout</button>}
  </form>
 
)
}
export default LogginTask