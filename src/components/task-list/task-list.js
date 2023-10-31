import TaskListItem from "../task-list-item/task-list-item";
import PropTypes from 'prop-types';
import './task-list.css';

const TaskList = ({ tasks, onDeleted,
                    onToggleDone }) => {
  const elements = tasks.map((item)=> {
    const {id, ...itemProps} = item;
    return(
      <TaskListItem {...itemProps} key={id}
      onDeleted = {() => onDeleted(id)}
      onToggleDone ={() => onToggleDone(id)}/>
    )
  })
    return (
      <ul className="list-group todo-list">
        {elements}
      </ul>
    );
  };

  TaskList.propTypes = {
    tasks: PropTypes.array
  }
  export default TaskList;