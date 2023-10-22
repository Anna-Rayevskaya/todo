import './task-list-item.css'
const TaskListItem = ({ label }) =>{
    return(
        <li>
            <div className="view">
              <input className="toggle" type="checkbox"/>
              <label>        
                <span className="description">{ label }</span>
                <span className="created">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
          </li>
    )
};
export default TaskListItem