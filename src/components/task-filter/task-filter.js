import './task-filter.css';
import { Component } from 'react';
export default class Filter extends Component{
  render(){
    const {done} = this.props;

    return(
      <footer className="footer">
        <span className="todo-count">{done} items left</span>
        <ul className="filters">
          <li>
            <button className="selected">All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button>Completed</button>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
  )
  }
   
}

