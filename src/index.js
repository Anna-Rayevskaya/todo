import { createRoot } from 'react-dom/client';
import Header from './components/header/header';
import TaskList from './components/task-list/task-list';
import './index.css';
const container = document.getElementById('app');
const root = createRoot(container);

const App = () => {

    // const todoData = [
    //   { label: 'Drink Coffee', important: false, id: 1 },
    //   { label: 'Make Awesome App', important: true, id: 2 },
    //   { label: 'Have a lunch', important: false, id: 3 }
    // ];
  
    return (
      <div className="todoapp">
        <Header/>
        <TaskList/>
      </div>
    );
  };
  
  root.render(<App/>);