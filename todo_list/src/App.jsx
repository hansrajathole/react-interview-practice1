import React, { useState } from 'react'

const App = () => {

  const [todo, setTodo] = useState([])
  const [task, settask] = useState('')

  const handleSubmit = (e)=>{
    if(!task.trim()) return
    e.preventDefault()
    setTodo((prev)=>[...prev , {task : task}])

    settask('')
  }

 const handleDelete = (index) =>{
  setTodo((prev)=> prev.filter((task , i)=> i !== index))
 }

  return (
    <div className='container'>
      <div className='input-container'>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          value={task}
          onChange={(e)=>settask(e.target.value)}
          />
          <button>add</button>
        </form>
        <div>
          {
            todo?.map((list , index)=>(
              <div key={index} className='list'>
                <p >{list.task}</p>
                <button onClick={()=>handleDelete(index)}>X</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
