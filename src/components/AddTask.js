import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
  
    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('add text please')
            return
        }
        onAdd({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
       <form className="addtask" onSubmit={onSubmit}>
           <div className='form-control'>
               <label>Task</label>
               <input type='text' placeholder='Add task' 
               value={text} onChange={(e) => setText(e.target.value)} />
           </div>
           <div className='form-control'>
               <label>Day & Time</label>
               <input type='text' placeholder='Add Day & Time'
               value={day} onChange={(e) => setDay(e.target.value)}/>
           </div>
           <div className='form-control-check'>
               <label>Task Completed</label>
               <input type='checkbox'
               checked={reminder}
               value={reminder} onChange={(e) => setReminder(e.target.value)} />
           </div>
           <input className="btn btn-block" 
           type='submit' value='save task'/>
       </form>
    )
}
export default AddTask