import './task-list-item.css'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import Timer from '../task-timer/task-timer'

function TaskListItem({ label, onDeleted, onToggleImportant, onToggleDone, done, timer }) {
  const [doneState, setDone] = useState(false)

  TaskListItem.propTypes = {
    label: PropTypes.string,
    done: PropTypes.bool,
  }

  const handleChange = () => {
    onToggleDone()
    setDone(!doneState)
  }

  const onKeyHandler = (event) => {
    if (event.key === 'Enter') {
      onToggleDone()
    }
  }

  let className = ''
  if (done) {
    className += 'completed'
  }
  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={handleChange} defaultChecked={done} />
        <label>
          <span className="description" onClick={onToggleDone} onKeyDown={onKeyHandler} role="textbox" tabIndex={0}>
            {label}
          </span>
          <Timer timer={timer} />
          <span className="created">created {formatDistanceToNow(new Date(), { includeSeconds: true })}</span>
        </label>
        <button type="button" className="icon icon-edit" onClick={onToggleImportant} aria-label="edit" />
        <button type="button" className="icon icon-destroy" onClick={onDeleted} aria-label="delete" />
      </div>
    </li>
  )
}
export default TaskListItem
