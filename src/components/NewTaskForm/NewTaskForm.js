import './NewTaskForm.css';
const NewTaskForm = () =>{
    return (      
    <input 
        className="new-todo" 
        placeholder="What needs to be done?">
    </input>
    );
  };
 

  export default NewTaskForm ;
  
//   import './header.css';
// const Header = () =>{
//     function clickEnter (event){
//         var key = event.which || event.keyCode;
//     if (key === 13) {
//         console.log('Клик!!!')
//     }
//     }
//     return (
//         <header className="header">
//     <h1>My Todo List</h1>
//     <input 
//         className="new-todo" placeholder="What needs to be done?" 
//         onChange={clickEnter}>
//     </input>
//     </header>
//     );
//   };
 

//   export default Header;