import './todo-list-item.css'
const TodoListItem = ({ label, important = false }) =>{
    const Style = {
        color : important ? 'tomato' : 'black'
    }
    return(
        <span>
            <span className="todo-list-item" 
                style={Style}>{ label }
            </span>
            <button></button>
            <button></button>
        </span>
    );
};
export default TodoListItem