import logo from './logo.svg'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Tasks from './components/tasks'
import AddTask from './components/add_task'

function App() {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const new_task = { id, ...task }
    setTasks([...tasks, new_task])
  }

  const delTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

  return (
    <div className="Container">
      <Header title="ChordStore"  onAdd = {() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={delTask} /> : 'No Chord Progressions Saved'}
    </div>
  );
}

export default App;
