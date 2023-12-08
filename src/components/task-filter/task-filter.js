import './task-filter.css'
import { useState } from 'react'

function Filter({ todoFilterState, done, clearCompleted }) {
  const [activeButton, setActiveButton] = useState('all')

  const handleButtonClick = (filterType) => {
    todoFilterState(filterType)
    setActiveButton(filterType)
  }

  return (
    <footer className="footer">
      <span className="todo-count">{done} items left</span>
      <ul className="filters">
        <li>
          <button
            type="button"
            className={activeButton === 'all' ? 'selected' : ''}
            onClick={() => handleButtonClick('all')}
          >
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            className={activeButton === 'active' ? 'selected' : ''}
            onClick={() => handleButtonClick('active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            type="button"
            className={activeButton === 'completed' ? 'selected' : ''}
            onClick={() => handleButtonClick('completed')}
          >
            Completed
          </button>
        </li>
      </ul>
      <button type="button" className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

export default Filter
