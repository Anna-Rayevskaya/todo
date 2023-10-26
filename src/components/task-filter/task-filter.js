import './task-filter.css';
import { Component } from 'react';
export default class Filter extends Component{
  render(){
    const {done, filter, clearCompleted} = this.props;
    // className="selected"                                     добавить нажатой кнопке класс!!!!!
    return(
      <footer className="footer">
        <span className="todo-count">{done} items left</span>
        <ul className="filters">
          <li>
            <button 
              onClick = {()  =>  filter('all')}
            >All</button>
          </li>
          <li>
            <button
            onClick = {()  =>  filter('active')}
            >Active</button>
          </li>
          <li>
            <button
            onClick = {()  =>  filter("completed")}
            >Completed</button>
          </li>
        </ul>
        <button className="clear-completed"
        onClick = {()  =>  clearCompleted()}
        >Clear completed</button>
      </footer>
  )
  }
   
}

