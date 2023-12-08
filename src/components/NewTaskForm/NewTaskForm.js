import { useState } from 'react'
import './NewTaskForm.css'

function NewTaskForm({ addItem, addTimer }) {
  const [label, setLabel] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  NewTaskForm.defaultProps = {
    onChange: () => {},
    onSubmit: () => {},
    addItem: () => {},
  }

  const onChange = (e) => {
    setLabel(e.target.value)
  }

  const onChangeMin = (e) => {
    setMin(e.target.value)
  }

  const onChangeSec = (e) => {
    setSec(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addItem(label)
    addTimer(min, sec)
    setLabel('')
    setMin('')
    setSec('')
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form header" onSubmit={onSubmit}>
        <input name="name" className="new-todo" placeholder="Task" onChange={onChange} value={label} />
        <input className="new-todo-form__timer" placeholder="Min" onChange={onChangeMin} value={min} />
        <input className="new-todo-form__timer" placeholder="Sec" onChange={onChangeSec} value={sec} />
        <button type="submit" className="battonSabmit">
          Submit
        </button>
      </form>
    </header>
  )
}

export default NewTaskForm
