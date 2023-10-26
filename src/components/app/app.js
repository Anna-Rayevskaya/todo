import{Component} from 'react';
import NewTaskForm  from '../NewTaskForm/NewTaskForm';
import TaskList from '../task-list/task-list';
import Filter  from '../task-filter/task-filter';
import './app.css';
export default class App extends Component{

    maxId = 100;
    state = {
      todoData : [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make Awesome App'),
        this.createTodoItem('Have a lunch')
      ]
    };

    createTodoItem(label){
        return{
            label,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = todoData.toSpliced(idx, 1);
            return{
                todoData: newArray
            }
        })
    }

    addItem = (text) => {
        const newItem = {
            label: text,
            id: Math.random().toString(36).slice(2)
        }

        this.setState(({todoData}) => {
                const newArray = [...todoData,  newItem]
                return{
                    todoData: newArray
                }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem,
                done: !oldItem.done};

            const newArray = todoData.toSpliced(idx, 1, newItem);

            return {
                todoData: newArray
            }
        })
        
    }

    filter = (text) => {
        if(text === 'completed'){
            const completed = this.state.todoData
                            .filter((el) => el.done);
                            console.log(completed)
            return completed
        } else if(text === 'active'){
            const active = this.state.todoData
                            .filter((el) => !el.done);
                            console.log( active)
        return active
        } else{
            console.log( this.state.todoData)
            return this.state.todoData
            
        }
    }

    clearCompleted = () => {
        this.setState(({todoData}) => {

            const newArray = todoData
                            .forEach((el, index) => {
                                if(el.done){
                                    todoData.toSpliced(index, 1)
                                }
                            })

        return {
            todoData: newArray
        }
        })
    }

    render(){

        const doneCount = this.state.todoData
                            .filter((el) => !el.done).length;

        return (
        <div className="todoapp">
            <NewTaskForm
            addItem = {this.addItem}
            />
            <section className="main">
            <TaskList 
            tasks = {this.state.todoData}
            onDeleted = {this.deleteItem}
            addItem = {this.addItem}
            onToggleDone = {this.onToggleDone}/>
            <Filter 
                done = {doneCount}
                filter = {this.filter}
                clearCompleted = {this.clearCompleted}
            />
            </section>  
        </div>
        );
    }
  };