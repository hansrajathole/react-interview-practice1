import React from 'react'
import { useToggle } from '../hooks/toggle.js'

const ToggleTheme = () => {

    const [isToggled, toggle] = useToggle()

  return (
    <div>
      <h1>Custom Hook</h1>
      <button onClick={toggle}>Toggle</button>
      <p>{isToggled ? 'ON' : 'OFF'}</p>
    </div>
  )
}

export default ToggleTheme
