import{Component} from 'react';
import NewTaskForm  from '../NewTaskForm/NewTaskForm';
import TaskList from '../task-list/task-list';
import Filter  from '../task-filter/task-filter';
import './app.css';
export default class App extends Component{

    state = {
      todoData : [
        { label: 'Drink Coffee', id: 1 },
        { label: 'Make Awesome App', id: 2 },
        { label: 'Have a lunch', id: 3 }
      ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = todoData.toSpliced(idx, 1);
            return{
                todoData: newArray
            }
        })
    }
    
  render(){
    return (
      <div className="todoapp">
        <header className="header">
          <h1>My Todo List</h1>
          <NewTaskForm/>
        </header>
        <section className="main">
          <TaskList 
          tasks = {this.state.todoData}
          onDeleted = {this.deleteItem}/>
          <Filter/>
        </section>  
      </div>
    );
  }
  };