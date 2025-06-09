import React, { useState } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { add, remove } from './store/todoSlice'

const App = () => {

  // const [todo, setTodo] = useState([])
  const [task, settask] = useState('')
  const todo = useSelector((state)=> state.todolist.data)
  const dispatch = useDispatch()

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!task.trim()) return

    const obj = {
      id  : todo.length+1,
      task : task,
      isCompleted : false
    }
    dispatch(add(obj))
    // setTodo((prev)=>[...prev , obj])
    
    settask('')
  }

 const handleDelete = (id) =>{
  // setTodo((prev)=> prev.filter((task , i)=> i !== index))
  dispatch(remove(id))
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
                <button onClick={()=>handleDelete(list.id)}>X</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
