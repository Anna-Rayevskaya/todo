import TaskListItem from "../task-list-item/task-list-item";
import './task-list.css';
const TaskList = ({ tasks, onDeleted }) => {
  const elements = tasks.map((item)=> {
    const {id, ...itemProps} = item;
    return(
      <TaskListItem {...itemProps} key={id}
      onDeleted = {() => onDeleted(id)}/>
    )
  })
    return (
      <ul className="list-group todo-list">
        {elements}
      </ul>
    );
  };

  


  export default TaskList;