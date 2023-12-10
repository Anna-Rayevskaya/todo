import { useState } from 'react'

import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskList from '../task-list/task-list'
import Filter from '../task-filter/task-filter'
import './app.css'

function App() {
  const [todoData, setTodoData] = useState([])
  const [todoFilter, setTodoFilter] = useState('all')
  // const [timer, setTimer] = useState('')

  App.defaultProps = {
    deleteItem: () => {},
    addItem: () => {},
    onToggleDone: () => {},
    todoFilterState: () => {},
    filter: () => {},
    clearCompleted: () => {},
  }

  const deleteItem = (id) => {
    const idx = todoData.findIndex((el) => el.id === id)
    const newArray = todoData.toSpliced(idx, 1)
    setTodoData(newArray)
  }

  const addItem = (text, min, sec) => {
    const tim = Number(min) * 60 + Number(sec)
    // setTimer(tim)
    const newItem = {
      label: text,
      id: Math.random().toString(36).slice(2),
      timer: tim,
    }
    const newArray = [...todoData, newItem]
    setTodoData(newArray)
  }

  const onToggleDone = (id) => {
    const idx = todoData.findIndex((el) => el.id === id)
    const oldItem = todoData[idx]
    const newItem = {
      ...oldItem,
      done: !oldItem.done,
    }

    const newArray = todoData.toSpliced(idx, 1, newItem)
    setTodoData(newArray)
  }

  const todoFilterState = (text) => {
    if (text !== todoFilter) {
      setTodoFilter(text)
    }
  }

  const filter = () => {
    if (todoFilter === 'completed') {
      const completed = todoData.filter((el) => el.done)
      return completed
    }
    if (todoFilter === 'active') {
      const active = todoData.filter((el) => !el.done)
      return active
    }
    if (todoFilter === 'all') {
      return todoData
    }
    return []
  }

  const clearCompleted = () => {
    const newArray = todoData.filter((todo) => !todo.done)
    setTodoData(newArray)
  }
  const doneCount = todoData.filter((el) => !el.done).length

  return (
    <div className="todoapp">
      <NewTaskForm addItem={addItem} />
      <section className="main">
        <TaskList tasks={filter()} onDeleted={deleteItem} addItem={addItem} onToggleDone={onToggleDone} />
        <Filter done={doneCount} todoFilterState={todoFilterState} clearCompleted={clearCompleted} />
      </section>
    </div>
  )
}

export default App
