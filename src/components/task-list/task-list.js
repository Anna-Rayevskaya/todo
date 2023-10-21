import TaskListItem from "../task-list-item/task-list-item";
import './task-list.css';
const TaskList = ({tasks}) => {
  
  const elements = tasks.map((item) => {
    const {id, ...itemProps} = item;
    return (<li key={id} className="list-group-item">
      <TaskListItem {...itemProps}/>
    </li>)
  });
    return (
      <ul className="list-group todo-list">
        {elements}
      </ul>
    );
  };

  export default TaskList;