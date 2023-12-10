import './task-list-item.css'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import Timer from '../task-timer/task-timer'

function TaskListItem({ label, onDeleted, onToggleImportant, onToggleDone, done, timer, id }) {
  const [doneState, setDone] = useState(done)
  const [completedClassName, setCompletedClassName] = useState('')

  useEffect(() => {
    if (done) {
      setCompletedClassName('completed')
    } else {
      setCompletedClassName('')
    }
  }, [done])

  TaskListItem.propTypes = {
    label: PropTypes.string,
    done: PropTypes.bool,
  }

  const handleChange = () => {
    onToggleDone(id)
    setDone(!doneState)
  }

  return (
    <li className={completedClassName}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={handleChange} defaultChecked={done} />
        <label>
          <span className="description" role="textbox" tabIndex={0}>
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
