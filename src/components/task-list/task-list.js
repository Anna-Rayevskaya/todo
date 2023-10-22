import TaskListItem from "../task-list-item/task-list-item";
import './task-list.css';
const TaskList = () => {
    return (
      <ul className="list-group todo-list">
          <TaskListItem label='задача 1'/>
          <TaskListItem label='задача 2'/>
          <TaskListItem label='задача 3'/>
      </ul>
    );
  };

  


  export default TaskList;