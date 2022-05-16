import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [name, setText] = useState('')
    const [age, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
  
    const onSubmit = (e) => {
        e.preventDefault()
        if(!name){
            alert('add text please')
            return
        }
        onAdd({ name, age, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
       <form className="addtask" onSubmit={onSubmit}>
           <div className='form-control'>
               <label>Task</label>
               <input type='text' placeholder='task' 
               value={name} onChange={(e) => setText(e.target.value)} />
           </div>
           <div className='form-control'>
               <label>date</label>
               <input type='date' placeholder='date'
               value={age} onChange={(e) => setDay(e.target.value)}/>
           </div>
           <div className='form-control-check'>
               <label>is Completed</label>
               <input type='checkbox'
               checked={reminder}
               value={reminder} onChange={(e) => setReminder(e.target.value)} />
           </div>
           <input className="btn btn-block" 
           type='submit' value='Save'/>
       </form>
    )
}
export default AddTask