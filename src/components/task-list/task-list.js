import TaskListItem from "../task-list-item/task-list-item";
import './task-list.css';
const TaskList = () => {
    return (
      <ul className="list-group todo-list">
          <TaskListItem />
      </ul>
    );
  };

  


  export default TaskList;