import './header.css';
const Header = () =>{
    return (
        <header className="header">
    <h1>My Todo List</h1>
    <input 
        className="new-todo" 
        placeholder="What needs to be done?">
    </input>
    </header>
    );
  };
 

  export default Header;
  
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