
import React from 'react';
import { createRoot } from 'react-dom/client';
import NewTaskForm  from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/task-list/task-list';
import Footer  from './components/footer/footer';
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
        <header className="header">
          <h1>My Todo List</h1>
          <NewTaskForm/>
        </header>
        <section className="main">
          <TaskList/>
          <Footer/>
        </section>  
      </div>
    );
  };
  
  root.render(<App tab="home"/>);