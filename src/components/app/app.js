import{Component} from 'react';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TaskList from '../task-list/task-list';
import Filter  from '../task-filter/task-filter';
import './app.css';
export default class App extends Component{

    state = {
      todoData : [],
      todoFilter: 'all'
    };

    static defaultProps = {
        deleteItem: () => {},
        addItem: () => {},
        onToggleDone: () => {},
        todoFilterState: () => {},
        filter: () => {},
        clearCompleted: () => {}
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

    todoFilterState = (text) => {
        this.setState(({todoFilter}) => {
            if(text !== todoFilter){
                return {
                    todoFilter: text
                }
            }
            
        })
    }

    filter = () => {

        if(this.state.todoFilter === 'completed'){
            const completed = this.state.todoData
                            .filter((el) => el.done);
            return completed
        } else if(this.state.todoFilter === 'active'){
            const active = this.state.todoData
                            .filter((el) => !el.done);
        return active
        } else if(this.state.todoFilter === 'all'){
            return this.state.todoData
        } else{
            return []
        }
    }

    clearCompleted = () => { 
        this.setState(({todoData}) => {
            const newArray = todoData.filter(todo => !todo.done); 
            return {
                todoData: newArray
            }
        })
    }

    render(){

        const doneCount = this.state.todoData.filter((el) => !el.done).length;

        return (
        <div className="todoapp">
            <NewTaskForm
            addItem = {this.addItem}
            />
            <section className="main">
            <TaskList 
            tasks = {this.filter()}
            onDeleted = {this.deleteItem}
            addItem = {this.addItem}
            onToggleDone = {this.onToggleDone}/>
            <Filter 
                done = {doneCount}
                todoFilterState = {this.todoFilterState}
                clearCompleted = {this.clearCompleted}
            />
            </section>  
        </div>
        );
    }
  };