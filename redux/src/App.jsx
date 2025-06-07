import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from './store/counterSlice'

const App = () => {
  
  const dispatch = useDispatch()
  const counter = useSelector((state)=>state.counter)
  console.log(counter);
  
  return (
    <div>
      <h1>Counter app</h1>
      <p>count : {counter}</p>
      <button onClick={()=>dispatch(increament())}>increament</button>
      <button onClick={()=>dispatch(decreament())}>increament</button>
    </div>
  )
}

export default App

