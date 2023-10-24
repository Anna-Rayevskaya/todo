import './task-list-item.css'
import { Component } from 'react';
export default class TaskListItem extends Component {
  state = {
    done: false
  }

  onLabelClik = () => {
    this.setState(({done}) => {
      return{
        done: !done
      }
    });
  }
    render(){
      const { label } = this.props;
      const { done } = this.state;

      let className = '';
       if(done){
        className += 'completed'
       }
      return(
        <li className = {className}>
            <div className="view">
              <input className="toggle" type="checkbox" onClick = { this.onLabelClik }/>
              <label>        
                <span 
                  className = 'description'
                  onClick = { this.onLabelClik }>
                    { label }
                </span>
                <span className="created">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"
              onClick={this.props.onDeleted}
              ></button>
            </div>
            </li>
    )
};
};