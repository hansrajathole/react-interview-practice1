import React, { useState, useEffect } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      time: currentTime.toLocaleTimeString(),
      task: task,
    };

    setTodo((prev) => [...prev, newTodo]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };


  return (
    <>
      <div>
        <p>Current Time: {currentTime.toLocaleTimeString()}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <button type="submit">Add</button>
        </form>
        <div>
          {todo.map((item) => (
            <div className="list" key={item.id}>
              <div>{item.task}</div>
              <p>{item.time}</p>
              <button onClick={() => handleDelete(item.id)}>X</button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>Timer</h1>
        <div className="timer">
          <input
            type="number"
            id="hour"
            value={timer.hour}
            onChange={handleChange}
            min="0"
            max="23"
          />
          <input
            type="number"
            id="minute"
            value={timer.minute}
            onChange={handleChange}
            min="0"
            max="59"
          />
          <input
            type="number"
            id="second"
            value={timer.second}
            onChange={handleChange}
            min="0"
            max="59"
          />
        </div>
      </div>
    </>
  );
}

export default App;