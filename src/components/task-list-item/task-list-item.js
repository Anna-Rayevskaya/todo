import './task-list-item.css'
import { Component } from 'react';
export default class TaskListItem extends Component {
  state = {
    done: false
  }
    render(){
      const { label, onDeleted,
        onToggleImportant,
        onToggleDone,
        done} = this.props;

      let className = '';
       if(done){
        className += 'completed'
       }
      return(
        <li className = {className}>
            <div className="view">
              <input className="toggle" type="checkbox" onClick = { onToggleDone }/>
              <label>        
                <span 
                  className = 'description'
                  onClick = { onToggleDone }>
                    { label }
                </span>
                <span className="created">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"
              onClick={onToggleImportant}
              ></button>
              <button className="icon icon-destroy"
              onClick={onDeleted}
              ></button>
            </div>
            </li>
    )
};
};