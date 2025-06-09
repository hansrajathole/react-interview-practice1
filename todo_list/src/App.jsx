import React, { useState } from 'react'

const App = () => {

  const [todo, setTodo] = useState([])
  const [task, settask] = useState('')

  const handleSubmit = (e)=>{
    if(!task.trim()) return
    e.preventDefault()

    const obj = {
      id  : todo.length+1,
      task : task,
      isCompleted : false
    }

    setTodo((prev)=>[...prev , obj])

    settask('')
  }

 const handleDelete = (index) =>{
  setTodo((prev)=> prev.filter((task , i)=> i !== index))
 }

 const handleToggle = (id)=>{
  setTodo((prev)=>prev.map((t)=>{
    if(t.id === id){
      return {...t , isCompleted : !t.isCompleted}
    }else {
      return t
    }
  }
    
  ))
 }

  return (
    <div className='container'>
      <div className='input-container'>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          className='input'
          value={task}
          onChange={(e)=>settask(e.target.value)}
          />
          <button>add</button>
        </form>
        <div>
          {
            todo?.map((list , index)=>(
              <div key={index} className='list'>
                <div className='items'>
                  <input type="checkbox"
                  checked={list.isCompleted} onChange={()=>handleToggle(list.id)}/>
                  <p   className={list.isCompleted ? "strikethrough" : ""}>{list.task}</p>
                </div>
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
